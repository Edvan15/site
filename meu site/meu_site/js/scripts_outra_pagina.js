// Variável global para armazenar o histórico de rolagens
let historicoRolagens = [];

// Função para rolar um dado
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Função para rolar dados de um tipo específico
function rollSpecificDice(sides, quantidade) {
    let resultados = [];
    for (let i = 0; i < quantidade; i++) {
        resultados.push(rollDice(sides));
    }
    return resultados;
}

// Função para adicionar/subtrair um modificador ao resultado final
function adicionarModificador() {
    let modificador = parseInt(document.getElementById('modificador').value);
    let resultadoAtual = parseInt(document.getElementById('resultadoValor').textContent);
    let resultadoFinal = resultadoAtual + modificador;

    // Atualizar o resultado na página
    let resultadoElemento = document.getElementById('resultadoValor');
    resultadoElemento.textContent = resultadoFinal;

    // Atualizar mensagem baseado no resultado final
    let mensagemElemento = document.getElementById('mensagem');
    if (resultadoFinal > 20 / 2) {
        mensagemElemento.textContent = 'Parabéns!';
    } else if (resultadoFinal === 20) {
        mensagemElemento.textContent = 'CARALHOOOO';
    } else {
        mensagemElemento.textContent = 'Se ferrou!';
    }

    // Exibir alerta para resultados específicos
    if (resultadoFinal < 20 / 2) {
        alert('Se FUdeu');
    } else if (resultadoFinal === 20) {
        alert('CARALHOOOO');
    }

    // Atualizar o histórico de rolagens
    atualizarHistorico();
}

// Função para atualizar o histórico de rolagens na página
function atualizarHistorico() {
    let historicoElemento = document.getElementById('historicoLista');
    historicoElemento.innerHTML = ''; // Limpar o conteúdo atual do histórico

    historicoRolagens.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `Rolagem ${index + 1}: ${item}`;
        historicoElemento.appendChild(li);
    });
}

// Função para rolar múltiplos dados
function rollMultipleDice() {
    let modificador = parseInt(document.getElementById('modificador').value);
    let total = 0;

    // Rolar D4
    let quantidadeD4 = parseInt(document.getElementById('quantidadeD4').value);
    let resultadosD4 = rollSpecificDice(4, quantidadeD4);
    historicoRolagens.push(...resultadosD4);
    total += resultadosD4.reduce((acc, val) => acc + val, 0);

    // Rolar D6
    let quantidadeD6 = parseInt(document.getElementById('quantidadeD6').value);
    let resultadosD6 = rollSpecificDice(6, quantidadeD6);
    historicoRolagens.push(...resultadosD6);
    total += resultadosD6.reduce((acc, val) => acc + val, 0);

    // Rolar D8
    let quantidadeD8 = parseInt(document.getElementById('quantidadeD8').value);
    let resultadosD8 = rollSpecificDice(8, quantidadeD8);
    historicoRolagens.push(...resultadosD8);
    total += resultadosD8.reduce((acc, val) => acc + val, 0);

    // Rolar D10
    let quantidadeD10 = parseInt(document.getElementById('quantidadeD10').value);
    let resultadosD10 = rollSpecificDice(10, quantidadeD10);
    historicoRolagens.push(...resultadosD10);
    total += resultadosD10.reduce((acc, val) => acc + val, 0);

    // Rolar D12
    let quantidadeD12 = parseInt(document.getElementById('quantidadeD12').value);
    let resultadosD12 = rollSpecificDice(12, quantidadeD12);
    historicoRolagens.push(...resultadosD12);
    total += resultadosD12.reduce((acc, val) => acc + val, 0);

    // Rolar D20
    let quantidadeD20 = parseInt(document.getElementById('quantidadeD20').value);
    let resultadosD20 = rollSpecificDice(20, quantidadeD20);
    historicoRolagens.push(...resultadosD20);
    total += resultadosD20.reduce((acc, val) => acc + val, 0);

    // Aplicar modificador ao total
    total += modificador;

    // Atualizar o resultado na página
    let resultadoElemento = document.getElementById('resultadoValor');
    resultadoElemento.textContent = total;

    // Atualizar mensagem baseado no resultado
    let mensagemElemento = document.getElementById('mensagem');
    if (total > 20 / 2) {
        mensagemElemento.textContent = 'Parabéns!';
    } else if (total === 20) {
        mensagemElemento.textContent = 'CARALHOOOO';
    } else {
        mensagemElemento.textContent = 'Se ferrou!';
    }

    // Exibir alerta para resultados específicos
    if (total < 20 / 2) {
        alert('Se FUdeu');
    } else if (total === 20) {
        alert('CARALHOOOO');
    }

    // Atualizar o histórico de rolagens
    atualizarHistorico();
}
