$(document).ready(function(){
  $('.sidenav').sidenav();

  $('.scrollspy').scrollSpy({
    scrollOffset: 50
  });

  if($(this).scrollTop() > 200){
    if($('.bck-navbar').is(':hidden')){
      var hnav = $('nav').height();
      $('.bck-navbar').height(hnav);
      $('.bck-navbar').show();
    }
  }
  else {
    if($('.bck-navbar').is(':visible')){
      $('.bck-navbar').hide();
    }
  }

  $(window).resize(function(){
     var hnav = $('nav').height();
     $('.bck-navbar').height(hnav);
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      if($('.bck-navbar').is(':hidden')){
        var hnav = $('nav').height();
        $('.bck-navbar').height(hnav);
        $('.bck-navbar').slideDown(300);
      }
    }
    else {
      if($('.bck-navbar').is(':visible')){
        $('.bck-navbar').slideUp(300);
      }
    }
  });
});
