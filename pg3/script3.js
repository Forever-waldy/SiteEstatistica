// Função para processar a entrada do usuário e converter em um array de números
function parseInput(input) {
    return input.split(/[\s,;]+/).map(Number).filter(num => !isNaN(num));
}

// Calcula a variancia
function calculateVariance(arr) {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    return arr.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / arr.length;
}

// Calcula o desvio padrão
function calculateStdDev(arr) {
    return Math.sqrt(calculateVariance(arr));
}

// Função para calcular e exibir o desvio padrão e a variância
function calculateStats() {
    const input = document.getElementById('data-input').value;
    const data = parseInput(input);

    // Valida a entrada de dados
    if (data.length === 0) {
        alert('Por favor, insira alguns dados válidos.');
        return;
    }

    // Armazena os valores
    const variance = calculateVariance(data).toFixed(2);
    const stddev = calculateStdDev(data).toFixed(2);

    // Atualiza o DOM com os resultados calculados
    document.getElementById('variance').textContent = variance;
    document.getElementById('stddev').textContent = stddev;
}
