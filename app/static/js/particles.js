// app/static/js/particles.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.id = 'particles-container';
    document.body.prepend(container);

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.innerText = '*';
        
        // Randomize horizontal position, size, and animation duration
        const startPosX = Math.random() * window.innerWidth;
        const duration = Math.random() * 8 + 4; // От 4 до 12 секунд (падают медленно)
        const opacity = Math.random() * 0.4 + 0.1; // Непрозрачность от 0.1 до 0.5
        const size = Math.random() * 1.5 + 0.8; // Размер от 0.8rem до 2.3rem
        
        particle.style.left = `${startPosX}px`;
        particle.style.opacity = opacity;
        particle.style.fontSize = `${size}rem`;
        particle.style.animationDuration = `${duration}s`;

        container.appendChild(particle);

        // Remove the particle after it finishes falling
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Создаем несколько звездочек сразу при загрузке (чтобы не было пусто)
    for(let i = 0; i < 15; i++) {
        setTimeout(createParticle, Math.random() * 3000);
    }

    // И продолжаем создавать новые каждую секунду
    setInterval(createParticle, 600);
});
