// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de Barras
    var barCtx = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Exemplo de Vendas',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(33, 150, 243, 0.2)',
                    'rgba(83, 21, 229, 0.2)',
                    'rgba(153, 358, 210, 0.2)',
                    'rgba(245, 341, 210, 0.2)',
                    'rgba(286, 171, 121, 0.2)',
                    'rgba(349, 50, 129, 0.2)'
                ],
                borderColor: [
                    'rgba(33, 150, 243, 1)',
                    'rgba(30, 136, 229, 1)',
                    'rgba(25, 118, 210, 1)',
                    'rgba(21, 101, 192, 1)',
                    'rgba(13, 71, 161, 1)',
                    'rgba(9, 50, 129, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Pizza
    var pieCtx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Produto A', 'Produto B', 'Produto C'],
            datasets: [{
                label: 'Exemplo de Participação de Mercado',
                data: [55, 25, 20],
                backgroundColor: [
                    'rgba(33, 150, 243, 0.8)',
                    'rgba(83, 136, 229, 0.8)',
                    'rgba(153, 118, 210, 0.8)'
                ],
                borderColor: [
                    'rgba(33, 150, 243, 1)',
                    'rgba(30, 136, 229, 1)',
                    'rgba(25, 118, 210, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            },
            layout: {
                padding: {
                    top: 100,
                    bottom: 100,
                    left: 10,
                    right: 10,
                }
            }
        }
    });
});
