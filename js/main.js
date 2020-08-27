

$(document).ready(function () {
  $('.navbar__mobileNav').click(function(){
    $('.mob-nav-collapsed').fadeToggle(1000);
});

  let $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
});
  let carousel = $(".screenshots__slider").waterwheelCarousel({
    startingItem: 1,
    flankingItems: 7,
    sizeMultiplier: 0.7,
    separation: 175
  });
  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });

  $(".feedbacks__slider").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    prevArrow: $('#prev-feedback'),
    nextArrow: $('#next-feedback'),
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
});