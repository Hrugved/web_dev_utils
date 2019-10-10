$(document).ready(function(){
  var scrollLink = $('.scroll');
  
  //smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  })
  
  //Active link switching
  $(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top;
      if(scrollBarLocation >= sectionOffset-50) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
  })
  
})
