const newsSwiper = new Swiper('.swiper-news', {
    direction: 'horizontal',
    
    slidesPerView: 3,
    spaceBetween: 24,
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   speed:1500,
})