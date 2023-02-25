



$(document).ready(function () {
  $('.venobox').venobox({
    spinner: 'wave',
    autoplay: false,
    overlayColor: 'red'
  });

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll > 130) {
      $('.top_menu').addClass('NavFiexd');
    } else {
      $('.top_menu').removeClass('NavFiexd');
    }
    if (scroll > 300) {
      $('.top_to').fadeIn();
    } else {
      $('.top_to').fadeOut();
    }
  });
  $('.displayed').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    fade: true,
    asNavFor: '.for_dis_slide'
});
$('.for_dis_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.displayed',
    centerPadding:0,
    dots: false,
  arrows:true,
  prevArrow:'<i class="fa fa-angle-left dis_left"></i>',
  nextArrow:' <i class="fa fa-angle-right dis_right"></i>',
    centerMode: true,
    focusOnSelect: true
});

  $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

  $('.top_to').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 500);
  });


  var typed = new Typed('.type', {
    strings: ['Tanjilul Karim', 'Web developer'],
    smartBackspace: true, // Default value,
    loop: true,
    typeSpeed: 100,
  });
  (function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  particlesJS('banner',

    {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "color": {
          "value": ["#818181"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#fff"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 7,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 100,
          "color": "#fff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 400,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );




});

















