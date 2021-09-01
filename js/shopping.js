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
    const $slideN = $(".newbox");
    const $slideB = $(".bestbox");
    const $slideS = $(".sunbox");
    const $firSlideN = $(".newbox li").eq(0);
    const $secSlideN = $(".newbox li").eq(1);
    const $firSlideB = $(".bestbox li").eq(0);
    const $secSlideB = $(".bestbox li").eq(1);
    const $firSlideS = $(".sunbox li").eq(0);
    const $secSlideS = $(".sunbox li").eq(1);
    // const $classname = $firSlide.attr('class');

    $secSlideN.animate({bottom:0}, 1000, function(){
      $firSlideN.css({bottom:370});
      $firSlideN.appendTo($slideN);
      // console.log($classname);
    });
    $secSlideB.animate({bottom:0}, 1000, function(){
      $firSlideB.css({bottom:370});
      $firSlideB.appendTo($slideB);
    });
    $secSlideS.animate({bottom:0}, 1000, function(){
      $firSlideS.css({bottom:370});
      $firSlideS.appendTo($slideS);
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