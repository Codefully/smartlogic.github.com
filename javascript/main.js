$(document).ready(function() {

  $('.sidebar a').click(function() {
    $('.primary-navigation').toggleClass('active', 1000, 'easeOutCubic');
    $('.primary-navigation > *').delay(250).toggleClass('active', 750, 'easeOutCubic');
  });

  // HOME PAGE SLIDER

  var sliderSpeed = 1000;

  $('.slider-control').click(function() {
    if($('.current-slide').next('.slide').length) {
      $('.current-slide').addClass('previous-slide', sliderSpeed).removeClass('current-slide').next('.slide').addClass('current-slide', sliderSpeed);
    }
    else {
      $('.current-slide').addClass('previous-slide', sliderSpeed).removeClass('current-slide');
      $('.slide:first-child').addClass('current-slide', sliderSpeed);
    }

    $('.slide').removeClass('previous-slide');
  });

});
