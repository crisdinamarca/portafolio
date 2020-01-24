$(document).ready(function(){

    /* SMOOTH SCROLL */
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });

    /* TOOLTIP */
    $('[data-toggle="tooltip"]').tooltip();

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