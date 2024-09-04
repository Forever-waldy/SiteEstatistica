// Função para processar a entrada do usuário e converter em um array de números
function parseInput(input) {
    return input.split(/[\s,;]+/).map(Number).filter(num => !isNaN(num));
}

// Calcula a média
function calculateMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}


// Clacula a mediana
function calculateMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
}

// Calcula a moda
function calculateMode(arr) {
    const freq = arr.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});
    const maxFreq = Math.max(...Object.values(freq));
    return Object.keys(freq).filter(num => freq[num] === maxFreq && freq[num] > 1).map(Number);
}

// Função para calcular a média, mediana e moda
function calculateStats() {
    const input = document.getElementById('data-input').value;
    const data = parseInput(input);

    // Valida a entrada de dados
    if (data.length === 0) {
        alert('Por favor, insira alguns dados válidos.');
        return;
    }

    // Armazena os valores
    const mean = calculateMean(data).toFixed(2);
    const median = calculateMedian(data).toFixed(2);
    const mode = calculateMode(data).length > 0 ? calculateMode(data).join(', ') : 'Amodal';

    // Atualiza o DOM com os resultados calculados
    document.getElementById('mean').textContent = mean;
    document.getElementById('median').textContent = median;
    document.getElementById('mode').textContent = mode;
}
