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

    $('section#block-views-modules-block .view-id-modules td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '317px');;
    });

    $('section#block-views-blog-view-block .view-id-blog_view td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'contain').css('height', '215px');;
    });


    console.log('Document Ready');
  });
  $(document).ajaxComplete(function(e) {
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



