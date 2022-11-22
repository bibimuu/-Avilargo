// サイドの全体にかかっているパディング11%を抽出して飾りの幅などに使用している
$(function() {
  // 画面幅
  const windowSize = document.body.clientWidth;
  // ファーストビューのコンテンツエリア
  const ContentsArea = $(".section-firstview").width();
  // サイド片方のマイナス幅（11%）
  const ContentsAreaSideMarginMinus = (ContentsArea - windowSize) / 2;

  // サイド片方のプラス幅（11%）
  const ContentsAreaSideMarginPlus = -ContentsAreaSideMarginMinus;

    // ファーストビュー飾り用
    $(".lower-box-decoration1").css("marginLeft", ContentsAreaSideMarginMinus);
    $(".lower-box-decoration1").css("width", ContentsAreaSideMarginPlus);

    // welcome飾り用
    const photoWidthWelcome = $(".photo-welcome").width();
    const whiteGlassWelcomeWidth = photoWidthWelcome + ContentsAreaSideMarginPlus;

      // circle decoration
      const circleLeftPosition = photoWidthWelcome + ContentsAreaSideMarginPlus;

      const circleWidth = $(".circle-decoration1").width();
      const circleHalfWidth = circleWidth / 2;
      const circlePositionAdjust = circleLeftPosition - circleHalfWidth;

      $(".circle-decoration1").css("left", circlePositionAdjust);

      // white-glass-welcome
      $(".white-glass-welcome").css("width", whiteGlassWelcomeWidth);
      $(".white-glass-welcome").css("marginLeft", ContentsAreaSideMarginMinus);

      // intoroduction-welcome
      $(".intoroduction-welcome").css("maxWidth", photoWidthWelcome);
      $(".text-decoration").css("Width", windowSize);

    // Activity飾り用
    const textPhotoLeftPadding = (ContentsAreaSideMarginPlus + 393) - ContentsAreaSideMarginPlus;

      // text-photo-activity
      $(".text-photo-activity").css("paddingLeft", textPhotoLeftPadding);
      $(".text-photo-activity-A").css("left", textPhotoLeftPadding);

      // activityの写真の位置
      $(".activity3").css("left", ContentsAreaSideMarginPlus);
      const activityPhoto1Left = ContentsAreaSideMarginPlus + 34;
      const activityPhoto2Left = ContentsAreaSideMarginPlus + 115;
      $(".activity1").css("left", activityPhoto1Left);
      $(".activity2").css("left", activityPhoto2Left);

    // Plan表の右側
    $(".first-cell-add").css("width", ContentsAreaSideMarginPlus);
    $(".price-add").css("width", ContentsAreaSideMarginPlus);
    $(".cleaning-add").css("width", ContentsAreaSideMarginPlus);
    $(".space-add").css("width", ContentsAreaSideMarginPlus);
    $(".sum-add").css("width", ContentsAreaSideMarginPlus);
    $(".table-price").css("marginRight", ContentsAreaSideMarginMinus);

    // Accessのセクション
      // GoogleMapの位置と幅の調節
      $(".google-map").css("marginLeft", ContentsAreaSideMarginMinus);
      // reservationBtnの幅と位置の調節
      $(".reservation-btn-access").css("paddingRight", ContentsAreaSideMarginPlus);
      $(".reservation-btn-access").css("marginRight", ContentsAreaSideMarginMinus);
      const ContentsAreaPlusSideMargin = ContentsArea + ContentsAreaSideMarginPlus;
      $(".reservation-btn-access").css("width", ContentsAreaPlusSideMargin);
      // 白い、黒い背景を置く
      $(".white-glass-access").css("width", ContentsAreaPlusSideMargin);
      $(".black-glass-access").css("width", ContentsAreaPlusSideMargin);
      const accessSectionHeight = $(".section-access").height();
      console.log(accessSectionHeight)
});