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
    const $slide = $(".slide");
    const $firSlide = $(".slide li").eq(0);
    const $secSlide = $(".slide li").eq(1);

    $secSlide.animate({bottom:0}, 1000, function(){
      $firSlide.css({bottom:370});
      $firSlide.appendTo($slide);
    });

  };

  $(window).on('load', function(){
    setInterval(slideFn, 2000);
  });


  
  // section_shop 탭메뉴
  const $tabmnu=$('.tab_pagenation li>a');
  const $tabcontainer=$('.tab_container');

  $tabmnu.on('click', function(evt){
    evt.preventDefault();

    let nowIdx=$tabmnu.index(this);

    $(this).parent().addClass('on').siblings().removeClass('on');

    $tabcontainer.animate({
      left:-800*nowIdx
    });
  });

});