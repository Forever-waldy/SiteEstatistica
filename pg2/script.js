// Função para processar a entrada do usuário e converter em um array de números
function parseInput(input) {
    return input.split(/[\s,;]+/).map(Number).filter(num => !isNaN(num));
}

// Função para calcular a média, mediana e moda
function calculateStats() {
    const input = document.getElementById('data-input').value;
    const data = parseInput(input);

    if (data.length === 0) {
        alert('Por favor, insira alguns dados válidos.');
        return;
    }

    const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    const median = arr => {
        arr.sort((a, b) => a - b);
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
    };
    const mode = arr => {
        const freq = arr.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});
        const maxFreq = Math.max(...Object.values(freq));
        return Object.keys(freq).filter(num => freq[num] === maxFreq && freq[num] > 1).map(Number);
    };

    // Atualiza o DOM com os resultados calculados
    document.getElementById('mean').textContent = mean(data).toFixed(2);
    document.getElementById('median').textContent = median(data).toFixed(2);
    document.getElementById('mode').textContent = mode(data).length > 0 ? mode(data).join(', ') : 'Nenhuma moda';
}
