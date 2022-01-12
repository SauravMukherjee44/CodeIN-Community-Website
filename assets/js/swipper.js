var swiper = new Swiper("#testimonials-slider .swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
