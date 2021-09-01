$(function(){

  // section_main 슬라이드
  const moveFn = function(){
    const $container = $('.mn_slidecontainer');
    const $firSlide = $(".mn_slidecontainer li").eq(0);
    const $secSlide = $(".mn_slidecontainer li").eq(1);
  
    $secSlide.animate({left:0}, 1000, function(){
      $firSlide.css({left:100+'vw'});
      $firSlide.appendTo($container);
    });
  };

  $(window).on('load', function(){
    setInterval(moveFn, 2000);
  });

  
  // section_product 슬라이드

  const slideFn = function(){
    const $container = $('slide');
    const $firSlide = $(".slide li").eq(0);
    const $secSlide = $(".slide li").eq(1);

    $secSlide.animate({bottom:0}, 1000, function(){
      $firSlide.css({bottom:370});
      $firSlide.appendTo($container);
    });
  };

  $(window).on('load', function(){
    setInterval(slideFn, 2000);
  });

});