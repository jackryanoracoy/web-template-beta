// IE support for "main"
document.createElement('main');

// Object-Fit
$(function () { objectFitImages() });

// Immersive
$(document).ready(function($) {
  var lastScroll = 0;
    $(window).scroll(function(){
    setTimeout(function() {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $(".header-section").removeClass("show");
      }
      else if (scroll < lastScroll - 10) {
        $(".header-section").addClass("show");
      }
      if (scroll >= 100) {
        $(".header-section").addClass("active");
      } 
      else {
        $(".header-section").removeClass("active");
      }
      lastScroll = scroll;
    }, 120);
  });
});

//Remove class "show" (Time interval)
// $(document).ready(function($) {
//   var $removeShow = $(".header-section");
//   setInterval(function() {
//     $removeShow.removeClass("show");
//   }, 5000);
// });

// Toggle class on click
$(document).ready(function($) {
  $('.menu-btn').click(function() {
    $('.menu-btn').stop().toggleClass('active');
    $('.site-navigation').stop().toggleClass('show');
    $('.header-section').stop().toggleClass('menu-opened');
  });
});

// Smooth scroll
$(document).ready(function($) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate( {
        scrollTop: target.offset().top
      }, 200);
    }
  });
});

// Detect if user is using TAB to navigate
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('tab-used');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
