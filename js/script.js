$(document).ready(function(){
  /////// 슬라이더
  // $('.main_visual').bxSlider({
  //   pagerType:'short',
  //   auto:'true',
  //   pause:'2500',
  //   autoHover:'true'
  // });
        $(".main_visual").bxSlider({
          auto: true,
          speed: 400,
          pause: 4000,
          mode:'fade'
        });
    /////// 메뉴바

    $(".main01").on("mouseenter" ,function(){
		$(".sub1").stop().slideDown(350);
	});
    $(".nav_sub_menu").mouseleave(function(){
		$(".sub1").stop().slideUp(350);
	});
    $(".main02").on("mouseenter" ,function(){
		$(".sub2").stop().slideDown(350);
	});
    $(".nav_sub_menu").mouseleave(function(){
		$(".sub2").stop().slideUp(350);
	});
    $(".main03").on("mouseenter" ,function(){
		$(".sub3").stop().slideDown(350);
	});
    $(".nav_sub_menu").mouseleave(function(){
		$(".sub3").stop().slideUp(350);
	});
    $(".main04").on("mouseenter" ,function(){
		$(".sub4").stop().slideDown(350);
	});
    $(".nav_sub_menu").mouseleave(function(){
		$(".sub4").stop().slideUp(350);
	});
    $(".main05").on("mouseenter" ,function(){
		$(".sub5").stop().slideDown(350);
	});
    $(".nav_sub_menu").mouseleave(function(){
		$(".sub5").stop().slideUp(350);
	});
    /////// 메뉴바 end

    /////// 서치 버튼
    $("#header_search").click(function(){
      if( $("#search_box").css("display") == "none"  ){
          $("#search_box").stop().slideDown();
      }
    });
    $("#close_btn").click(function(){
    $("#search_box").stop().slideUp();
    });
    /////// 서치 버튼 end


    
});