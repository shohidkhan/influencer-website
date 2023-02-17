



$(document).ready(function () {

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
    dots: false,
    fade: true,
    asNavFor: '.for_dis_slide'
  });
  $('.for_dis_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.displayed',
    centerPadding: 0,
    dots: false,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left dis_left"></i>',
    nextArrow: ' <i class="fa fa-angle-right dis_right"></i>',
    centerMode: true,
    focusOnSelect: true
  });

  $("#snow").fallingSnow({
    stopOnClick: true,
    stopElement: $('#snow'),
    speedAdjust: 3,
    thicknessAdjust: 1.5,
    drift: 100,
    opacity: true,

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



  $('.all_customers').slick({

    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 800,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: true,
          dots: false,
          arrows: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: true,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: true,
          dots: false,
          arrows: false,
        }
      }

    ]
  });





  var typed = new Typed('.type', {
    strings: ['Tanjilul Karim', 'Web developer'],
    smartBackspace: true, // Default value,
    loop: true,
    typeSpeed: 100,
  });
  (function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});

















