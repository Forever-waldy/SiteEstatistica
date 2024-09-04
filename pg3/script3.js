// Função para processar a entrada do usuário e converter em um array de números
function parseInput(input) {
    return input.split(/[\s,;]+/).map(Number).filter(num => !isNaN(num));
}

// Função para calcular a variância
function calculateVariance(arr) {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    return arr.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / arr.length;
}

// Função para calcular o desvio padrão
function calculateStdDev(arr) {
    return Math.sqrt(calculateVariance(arr));
}

// Função para calcular e exibir o desvio padrão e a variância
function calculateStats() {
    const input = document.getElementById('data-input').value;
    const data = parseInput(input);

    if (data.length === 0) {
        alert('Por favor, insira alguns dados válidos.');
        return;
    }

    const variance = calculateVariance(data);
    const stddev = calculateStdDev(data);

    // Atualiza o DOM com os resultados calculados
    document.getElementById('variance').textContent = variance.toFixed(2);
    document.getElementById('stddev').textContent = stddev.toFixed(2);
}
