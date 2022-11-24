// アニメーション用

// スクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");

    return false;
  });
});


  // ヘッダーアニメーション
$(function() {

  const firstviewHeight = $(".section-firstview").height();
  const header = $('.header-box');

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < firstviewHeight) {
      header.removeClass('header-bg-color');
    }else {
      header.addClass('header-bg-color');
    }
 });
});

//  画像切り替えファーストビュー
$(function() {

  index = 0;
  picturesFirstView = new Array;
  picturesFirstView[0] = "../ASSETS/firstview.png";
  picturesFirstView[1] = "../ASSETS/firstview2.png";
  picturesFirstView[2] = "../ASSETS/firstview3.png";
  picturesFirstView[3] = "../ASSETS/firstview4.png";

  $(".section-firstview").css({
    backgroundImage: 'url(' + picturesFirstView[0] + ')',
  });

  $("#firstviewPhotoChange").click(function(){
    index++;
    if (index > picturesFirstView.length-1) index=0;
    $(".section-firstview").css({
      backgroundImage: 'url(' + picturesFirstView[index] + ')',
    });
  });
});

// 画像切り替え内装
$(function() {

  picturesInterior = new Array;
  picturesInterior[0] = "../ASSETS/interior-room1.png";
  picturesInterior[1] = "../ASSETS/interior-room2.png";
  picturesInterior[2] = "../ASSETS/interior-room3.png";
  picturesInterior[3] = "../ASSETS/interior-room4.png";

  $("#living").css({
    color: "#ffffff",
    borderLeft: "#ffffff solid 1px"
  });

  $("#bath").css({
    color: "rgba(255, 255, 255, 0.3)",
    borderLeft: "none"
  });

  $("#bed").css({
    color: "rgba(255, 255, 255, 0.3)",
    borderLeft: "none"
  });

  $("#kitchen").css({
    color: "rgba(255, 255, 255, 0.3)",
    borderLeft: "none"
  });

  $(".photo-box-interior").css({
    backgroundImage: 'url(' + picturesInterior[0] + ')',
  });

  $("#living").click(function(){
    $(".photo-box-interior").css({
      backgroundImage: 'url(' + picturesInterior[0] + ')',
    });
    $("#living").css({
      color: "#ffffff",
      borderLeft: "#ffffff solid 1px"
    });
    $("#bath").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#bed").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#kitchen").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
  });

  $("#bath").click(function(){
    $(".photo-box-interior").css({
      backgroundImage: 'url(' + picturesInterior[1] + ')',
    });
    $("#living").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#bath").css({
      color: "#ffffff",
      borderLeft: "#ffffff solid 1px"
    });
    $("#bed").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#kitchen").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
  });

  $("#bed").click(function(){
    $(".photo-box-interior").css({
      backgroundImage: 'url(' + picturesInterior[2] + ')',
    });
    $("#living").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#bath").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#bed").css({
      color: "#ffffff",
      borderLeft: "#ffffff solid 1px"
    });
    $("#kitchen").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
  });

  $("#kitchen").click(function(){
    $(".photo-box-interior").css({
      backgroundImage: 'url(' + picturesInterior[3] + ')',
    });
    $("#living").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#bath").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#bed").css({
      color: "rgba(255, 255, 255, 0.3)",
      borderLeft: "none"
    });
    $("#kitchen").css({
      color: "#ffffff",
      borderLeft: "#ffffff solid 1px"
    });
  });
});

// プラン表のホバーアニメーション
$(function() {

  $(".hover-animation1").addClass("keep-animation-plan");

  $('.hover-animation1').mouseover(function(e) {
    $(".hover-animation1").addClass("keep-animation-plan");
    $(".hover-animation2").removeClass("keep-animation-plan");
  })

  $('.hover-animation2').mouseover(function(e) {
    $(".hover-animation2").addClass("keep-animation-plan");
    $(".hover-animation1").removeClass("keep-animation-plan");
  })
});

// アクティビティのアニメーション
// $(window).scroll(function() {
//   const winScroll = $(this).scrollTop();

//   const top = $("#activity").offset().top; // ターゲットの位置取得
//   console.log(top)
//   const position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
//   console.log(position)
//   const position_bottom = top + $("#activity").height();  // ターゲットが下からスクロールしたときに見える位置
//   console.log(position_bottom)
//   if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){

//     $('.activity3').css('transform', 'translateX(' + winScroll*-0.5 + 'px)');
//     $('.activity3').css('transform', 'translateY(' + winScroll*-0.5 + 'px)');

//   }else{
//     // それ以外の動き
//     return
//   }


// });

