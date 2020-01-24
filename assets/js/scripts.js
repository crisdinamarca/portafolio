$(document).ready(function(){

    /* TOOLTIP */
    $('[data-toggle="tooltip"]').tooltip();

    /* LIGHTBOX */

    /* SWIPER */
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
              delay: 5000,
            },
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }
    })

  });