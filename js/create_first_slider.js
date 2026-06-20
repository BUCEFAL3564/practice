const swiper = new Swiper('.hero-swiper', {
  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 1500,
});