// script.js
document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.querySelector('.falling-stars');
    const starCount = 100; // Número de estrelas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.left = `${Math.random() * 500}vw`;
        star.style.top = `${Math.random() * -1}vh`; // Para que as estrelas comecem fora da tela
        star.style.animationDuration = `${2 + Math.random() * 8}s`; // Duração aleatória da queda
        

        starContainer.appendChild(star);
    }
});
