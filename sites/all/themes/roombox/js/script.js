(function($) {
  $(document).mouseup(function(e) {
    console.log('mouseup');
  });
  // $(document).delegate('', 'click', function(event) {
  //   console.log('delegate');
  // });
  $(window).load(function(e) {
    console.log('Load Completed');
  });
  $(document).ready(function() {

  // SET BLOG AND MODULE IMAGE AS BACKGROUND IMAGE
    $('section#block-views-modules-block .view-id-modules td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '317px');;
    });
    $('section#block-views-blog-view-block .view-id-blog_view td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '215px');;
    });

    $('.header-wrapper .header-top-links > div').removeClass('container');
    $('.header-wrapper .header-top-menu > div').removeClass('container');


    $(".page-home section#block-views-blog-view-block .pager li > a").html("LOAD MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    });

    console.log('Document Ready');
  // });
  $(document).ajaxComplete(function(e) {

  // SET BLOG AND MODULE IMAGE AS BACKGROUND IMAGE
    $('section#block-views-blog-view-block .view-id-blog_view td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '215px');;
    });
    $(".page-home section#block-views-blog-view-block .pager li > a").html("LOAD MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");

    console.log('Ajax Completed');
  });
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };
})(jQuery);



