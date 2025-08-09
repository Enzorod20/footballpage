class CardsEffect {
    constructor(container) {
        this.container = container;
        this.cards = Array.from(container.querySelectorAll('.card'));
        this.centerIndex = 0;
        
        // Configuración
        this.radius = 20; // Separación entre cartas
        this.theta = 10; // Ángulo de rotación

        // Botones
        this.prevBtn = container.querySelector('.card-arrow.left');
        this.nextBtn = container.querySelector('.card-arrow.right');
        
        this.init();
    }

    init() {
        // Posiciona las cartas inicialmente
        this.update();

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
    }

    update() {
        this.cards.forEach((card, index) => {
            const offset = index - this.centerIndex;
            const direction = Math.sign(offset);
            const absOffset = Math.abs(offset);
            
            // Reinicia transformaciones
            card.style.transform = '';
            card.style.zIndex = '';
            card.style.opacity = '';
            
            if (offset === 0) {
                // Carta central
                card.style.transform = 'translateX(0) scale(1)';
                card.style.zIndex = '3';
                card.style.opacity = '1';
            } else {
                // Cartas laterales
                const z = -this.radius * absOffset;
                const scale = Math.max(0.8, 1 - 0.1 * absOffset);
                const x = direction * this.radius * 1.5;
                const y = 0;
                const rotation = -direction * this.theta;
                
                card.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateY(${rotation}deg) scale(${scale})`;
                card.style.zIndex = 2 - absOffset;
                card.style.opacity = Math.max(0.5, 1 - absOffset * 0.2);
            }
        });
    }

    prev() {
        this.centerIndex = Math.max(0, this.centerIndex - 1);
        this.update();
    }

    next() {
        this.centerIndex = Math.min(this.cards.length - 1, this.centerIndex + 1);
        this.update();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.cards-effect .card'));
    const prevBtn = document.querySelector('.cards-effect .cards-arrow.left');
    const nextBtn = document.querySelector('.cards-effect .cards-arrow.right');
    let currentIndex = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.className = 'card';
            
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    });

    // Inicializar
    updateCards();
});

// JavaScript para el efecto de cartas automático
document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.stack-card'));
    let currentIndex = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.className = 'stack-card';
            
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            }
        });
    }

    function autoRotate() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    }

    // Inicializar
    updateCards();

    // Rotar cada 3 segundos
    setInterval(autoRotate, 3000);
});