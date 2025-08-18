document.addEventListener('DOMContentLoaded', () => {
  // Evitar múltiples inclusiones
  if (window._componentsInited) return;
  window._componentsInited = true;

  // Inicializar Swiper (si lo usas)
  if (window.Swiper) {
    document.querySelectorAll('.swiper.mySwiper').forEach(el => {
      // lee data-* para configurar cada slider
      const loop = el.dataset.loop === 'true';
      const autoplayDelay = parseInt(el.dataset.autoplay || '0', 10);
      new Swiper(el, {
        effect: el.dataset.effect || 'slide',
        grabCursor: true,
        loop,
        autoplay: autoplayDelay ? { delay: autoplayDelay, disableOnInteraction: false } : false,
      });
    });
  }

  // Inicializar slider horizontal reutilizable (tu implementación)
  document.querySelectorAll('.clubs-slider').forEach(container => {
    // pasa container al initHorizontalSlider global (o importa función)
    initHorizontalSlider(container);
  });

  // Inicializar efecto cards automático
  document.querySelectorAll('.cards-stack, .cards-effect').forEach(stack => {
    initCardsAuto(stack);
  });
});