

const navBar = $(".top-nav");

$(window).scroll(function() {
  console.log($(this).scrollTop());
  if( $(this).scrollTop() > $('header').height() ) {
    navBar.addClass('nav-stuck');
  } else {
    navBar.removeClass('nav-stuck');
  }
});
