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
    var img = $(".views-field.views-field-field-module-image img").attr('src');
    if (img)$('')

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



