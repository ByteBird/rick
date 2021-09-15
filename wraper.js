
const swiper = new Swiper('.swiper', {
    // Optional parameters
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        breakpoints: {
          0:{
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
  