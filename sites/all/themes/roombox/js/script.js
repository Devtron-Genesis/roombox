(function($) {
  $(document).mouseup(function(e) {
    // if(e.clientX > 80 && e.clientY < 60) {
      // console.log('Menu button clicked');
    // }
  });
  $(document).delegate('', 'click', function(event) {
  });
  $(window).load(function(e) {
    var module_height = $('#slick-views-customise2-1-thumbnail-slider').height();
    $('aside.module-filters').css('bottom', module_height)
    console.log('Load Completed');
  });
  $(document).ready(function() {
    // CUSTOMISER PAGE
    // Module Price
    // var mpric = $('.slick-active.slick-center.slick-current .slide__content .slide__caption .slide__description').text();
    // $('.slick__slide.slide.slick-slide.slick-active.slick-current').prepend('<div class="module-price"><h1><b>'+mpric+'</h1><p>inc VAT</b><p>');
    // $('.slick-active.slick-center.slick-current .slide__content').each(function(){
    //   $(this).click(function(){
    //     var mprice = $(this).find('.slide__caption .slide__description').text();
    //     $('.slick__slide.slide.slick-slide.slick-active.slick-current').prepend('<div class="module-price"><h1><b>'+mprice+'</h1><p>inc VAT</b><p>');
    //   })
    // })

    $('.form-item-field-cladding-tid').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    $('.form-item-field-cladding-tid').click(function(){
      $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    })
    $('.form-item-field-doors-tid').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');

    // Close Size Price
    $('.field-type-tablefield.field-label-hidden').prepend('<p class="open2m"><span><b>Size:</b> 2m X 5m</span><span class="open2mx3m">Change Size</span><i class="fa fa-times close-size-price" aria-hidden="true"></i><p>');
    $('.field-type-tablefield.field-label-hidden i.close-size-price').click(function(){
      $(this).parents('.group-show-size').find('h3').find('a').click();
    });
    $('.group-show-size h3 a').html('<span class=""><b>Size:</b> 2m X 5m</span><span class="dropdown2mx3m">Change Size<i class="fa fa-angle-down" aria-hidden="true"></i></span>');
    $('#tablefield-0 tbody tr:first-child td:nth-child(2)').addClass('actv-block');
    $('#tablefield-0 tbody tr:first-child td:first-child').addClass('actv-block');
    $('#tablefield-0 thead tr th:nth-child(2)').addClass('actv-block');
    $('#tablefield-0 tbody tr td:not(:first-child)').click(function(){
      $(this).parents('#tablefield-0').find('td').removeClass('actv-block');
      $(this).parents('#tablefield-0').find('th').removeClass('actv-block');
      $(this).addClass('actv-block');
      $(this).siblings('td:first-child').addClass('actv-block');
      var cls = $(this).attr('class').split(' ')[1];
      $(this).parents('#tablefield-0').find('thead tr th.'+cls).addClass('actv-block');
      var mod_dep = $(this).siblings('td:first-child').text();
      var mod_wid = $(this).parents('#tablefield-0').find('thead tr th.'+cls).text();
      $(this).parents('.group-show-size').find('h3').find('a').click();
    });

    // Size Price
    var size_price = '9.995';
    $('.form-item-submitted-size-price input').val('£' + size_price);
    $('.slick-wrapper--asnavfor #slick-views-customise2-1-thumbnail').prepend('<div class="total-p"><h2><b>£<span id="total-price">10.499</span></h2><h4>inc VAT</b><h4></div>');
    $('#tablefield-0 tbody tr td:not(:first-child)').click(function(){
      var size_price = $(this).text().substring(1);
      $('.form-item-submitted-size-price input').val('£' + size_price);
    var total = parseFloat(cladding_price) + parseFloat(dimension_price) + parseFloat(size_price) +
                parseFloat(doors_price) + parseFloat(trim_p) + parseFloat(window_p) + parseFloat(fheating_p); 
      $('span#total-price').html(total);
      $('.form-item-submitted-total-price input').val('£' + total);
    })
    // Cladding/dimension Price
    var cladding_price = $('.views-field-field-cladding-price .field-content').text().substring(1);
    $('.form-item-submitted-cladding-prie input').val('£' + cladding_price);
    var dimension_price = $('.views-field-field-dimension-price .field-content').text().substring(1);
    $('.form-item-submitted-dimention-price input').val('£' + dimension_price);
    var doors_price = $('.views-field-field-doors-price .field-content').text().substring(1);
    $('.form-item-submitted-doors-price input').val('£' + doors_price);

    // Trim Price
    function trim(){
      var trim_price = 0;
      $('.views-row').each(function(){
          var trims = $(this).find('.views-field-field-trim-price .field-content').text().substring(1);
          var tp = parseFloat(trim_price) || 0;
          var t = parseFloat(trims) || 0;
          trim_price =  tp + t;
          return true;
      });
      return trim_price;
    }
    var trim_p = trim();
    $('.form-item-submitted-trim-price input').val('£' + trim_p);
    // Windows Price
    function windo(){
      var window_price = 0;
      $('.views-row').each(function(){
          var windows = $(this).find('.views-field-field-window-pricr .field-content').text().substring(1);
          var wp = parseFloat(window_price) || 0;
          var w = parseFloat(windows) || 0;
          window_price =  wp + w;
          return true;
      });
      return window_price;
    }
    var window_p = windo();
    $('.form-item-submitted-windo-price input').val('£' + window_p);

    // Floor Heating Price
    function fheating(){
      var fheating_price = 0;
      $('.views-row').each(function(){
          var fheatings = $(this).find('.views-field-field-electric-heater-price .field-content').text().substring(1);
          var tp = parseFloat(fheating_price) || 0;
          var t = parseFloat(fheatings) || 0;
          fheating_price =  tp + t;
          return true;
      });
      return fheating_price;
    }
    var fheating_p = fheating();
    $('.form-item-submitted-under-floor-heating-price input').val('£' + fheating_p);
    
    // Total Price
    var total = parseFloat(cladding_price) + parseFloat(dimension_price) + parseFloat(size_price) +
                parseFloat(doors_price) + parseFloat(trim_p) + parseFloat(window_p) + parseFloat(fheating_p); 
    $('span#total-price').html(total);
    $('.form-item-submitted-total-price input').val('£' + total);

    // Disable Winow Check Box
    var sibelrc = $('#edit-field-cladding-tid option:first-child').attr('selected');
    var dimver  = $('#edit-field-dimention-tid-12').attr('checked');
    if((sibelrc == 'selected') && (dimver == 'checked')) {
      $('.form-item-edit-field-windows-tid-24').css('pointer-events', 'none').css('color', '#cfcfcf');
    } else {
      $('.form-item-edit-field-windows-tid-24').css('pointer-events', 'all').css('color', '#555');
    }

    $('.match-height').matchHeight();
    if (window.matchMedia('(max-width: 767px)').matches)
      {
        $('.field.field-name-field-main-slider-image.field-type-image.field-label-hidden').append("<button>TRY CUSTOMISER</button>");
      }
    // CONTACT FORM((
    $('.cntct-form form#webform-client-form-31 .form-actions button.webform-submit').removeClass("btn-primary");
    $('.cntct-form form#webform-client-form-31 .form-actions button.webform-submit').addClass("btn-style");
    $(".cntct-form ").parent().find("#edit-submitted-name").attr("placeholder", "First Name").css({
      'color': '#333'
    });
    $(".cntct-form ").parent().find("#edit-submitted-last-name").attr("placeholder", "Last Name");
    $(".cntct-form ").parent().find("#edit-submitted-email-address").attr({
      "placeholder": "*Email",
      "color": "#000"
    });
    $(".cntct-form ").parent().find("#edit-submitted-telephone-number").attr("placeholder", "Telephone");
    $(".cntct-form ").parent().find("#edit-submitted-message").attr("placeholder", "Message...");
    $(".cntct-form ").parent().find("#edit-submitted-message").attr("placeholder", "Message...");
    $('.facebook.share-provider').addClass('fa fa-facebook-square ').removeClass('facebook flat square size-32 horizontal').css('font-size', '2em');
    $('.googleplus.share-provider').addClass('fa fa-google-plus-square ').removeClass('googleplus flat square size-32 horizontal').css('font-size', '2em');
    $('.twitter.share-provider').addClass('fa fa-twitter-square ').removeClass('twitter flat square size-32 horizontal').css('font-size', '2em');
    $('.linkedin.share-provider').addClass('fa fa-linkedin-square ').removeClass('linkedin flat square size-32 horizontal').css('font-size', '2em');
    $('.email.share-provider').addClass('fa fa-envelope ').removeClass('email flat square size-32 horizontal').css('font-size', '2em');
    $('.more.share-provider').removeClass('more flat square size-32 horizontal');

    // Responsice menu
    $('h2.sidr-class-block-title').css("visibility",'hidden');
    $('.sidr-inner').prepend('<a><i class="fa fa-times" aria-hidden="true"></i></a>');
    // $('ul#sidr-id-superfish-1').prepend('<a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>');
    // MODULE HOVER SLIDE  EFFECT
    $(function() {
      $(' #da-thumbs > li ').hoverdir();
    });
    $(' #da-thumbs > li ').append('<a class="field-content module-btn-style btn-listing" href="http://roombox.local.com/">CUSTOMISE</a> ');
    // MORE INFO IN PRODUCT PAGE
    $('.entity.entity-bean.bean-module-info.view-mode-default .field.field-name-field-more-info').addClass('fa').addClass('fa-chevron-circle-down');
    $('.entity.entity-bean.bean-module-info.view-mode-default .field.field-name-field-more-info').click(function() {
      $(this).parent().find('.group-info-inner-section.field-group-div.speed-fast.effect-none').slideToggle('slow');
      $(this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
    });
    $(".field-group-format-wrapper a").append('<span><i class="fa fa-info-circle"></i></span>').css({
      'display': 'inline-block',
      'font-size': '15px',
      'float': 'left'
    });
    $('.field-group-format-wrapper a').removeAttr("href");
    $('.field-group-format-wrapper a').removeAttr("class");
    // Set slider height according to window height
    var y = $(window).height();
    // console.log($('.header-content-field').height());
    $('section#block-bean-main-slider-0').css('height', y - 24);
    $('section#block-block-18 .cntct-btn a').css('top', y - 67);
    $('body.node-type-other-pages article.node-other-pages header').css({'height': y - 68,'float':'left','width':'100%'});
    $('.node-type-other-pages .arrow-down').css('top', y - 50);
    // $('.header-content-field').css({'top':'50%' , 'position':'relative'});
    // console.log(y);
    $('<p>Share On Social Media:</p>').appendTo('.os-share-widget-interface.share-container');
    $('article#node-24 header').css('height', y / 2);
    // RESIZING OF CTA

      // $(document).on("scroll", function() {
      //   var width = $(window).width();
      //   var scrolled = $(window).scrollTop();
      //   $('.front .xtranslate, .node-type-other-pages .xtranslate').css('width', (65 + ((scrolled - width) * .03)) + '%');
      // });

      $(document).on("scroll", function() {
      var secheg = $(document).height();
      var winheg = $(window).height();
      var tops = secheg -  740;
      var top = tops - winheg;
            if ($(document).scrollTop() > top) {
              var scrolled = $(window).scrollTop();
              $('.xtranslate').css('width', (80 + ((scrolled - top) * .03)) + '%');
            }
          });
      
    // MENU SHRINK
    $(document).on("scroll", function() {
      if ($(document).scrollTop() > 0) {
        $(".header-top-menu").addClass("head-shrink");
        $("section#block-superfish-1").addClass("menu-shrink");
        $('body.node-type-other-pages article.node-other-pages header').matchHeight('')
        $("a.logo.navbar-btn.pull-left img").addClass("logo-shrink");
      } else {
        $(".header-top-menu").removeClass("head-shrink");
        $("section#block-superfish-1").removeClass("menu-shrink");
        $("a.logo.navbar-btn.pull-left img").removeClass("logo-shrink");
      }
    });
    // SCROLL DOWN ARROW
    $(".arrow-down a").click(function() {
    $('html,body').animate({
        scrollTop: $(".arrow-down a").offset().top
      }, 'slow');
    });

    $('.sidr-inner i.fa.fa-times').on('click', function(e) {
    // $('a#sidr-0-button').trigger('click');
      $.sidr("toggle","sidr-0");
    });
    $('#sidr-0-button').on ('click', function(e) {
      $('body').css('');
    });
    // SMOOTH SCROLL SLIDER TEXT
    $(window).bind('scroll', function(e) {
      parallaxScroll();
      redrawDotNav();
    });

    function parallaxScroll() {
      var scrolled = $(window).scrollTop();
      $('.field.field-name-field-slider-heading.field-type-text.field-label-hidden').css('top', (33 - (scrolled * .08)) + '%');
      $('.field.field-name-field-half-third-description.field-type-text-long.field-label-hidden').css('top', (33 - (scrolled * .08)) + '%');
      $('.field.field-name-field-half-third-link.field-type-link-field.field-label-hidden').css('top', (33 - (scrolled * .08)) + '%');
    }

    function redrawDotNav() {
      var section1Top = 0;
    }
    // SET SLIDER, BLOG AND MODULE IMAGE AS BACKGROUND IMAGE
    $('.node-other-pages').each(function() {
      var hdr_bg_img = $(this).find('img').attr('src');
      $(this).find('header').css("background-image", 'url("' + hdr_bg_img + '")').css('background-size', 'cover');
    });
    $('.view-id-blog_view .blog-listing').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '240px').css('overflow', 'hidden');
    });
    $('section#block-bean-benefits-0').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css({
        'background-size': 'cover',
        'background': '#ECECEC'
      });
    });
    $('section#block-bean-uses').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css({
        'background-size': 'cover',
        'background': '#ececec',
        'color': '#212121'
      });
    });
    $('.header-wrapper .header-top-links > div').removeClass('container');
    $('.header-wrapper .header-top-menu > div').removeClass('container');
    // ADD SPACE IN LOAD MORE
    $(".view.view-blog-view.view-id-blog_view.view-display-id-blog .pager li > a").html("LOAD MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    console.log('Document Ready');
  });
  $(document).ajaxComplete(function(e) {

// Size Price
    var size_price = '9.995';
    $('.form-item-submitted-size-price input').val('£' + size_price);
    $('#tablefield-0 tbody tr td:not(:first-child)').click(function(){
      var size_price = $(this).text().substring(1);
      $('.form-item-submitted-size-price input').val('£' + size_price);
    var total = parseFloat(cladding_price) + parseFloat(dimension_price) + parseFloat(size_price) +
                parseFloat(doors_price) + parseFloat(trim_p) + parseFloat(window_p) + parseFloat(fheating_p); 
    $('span#total-price').html(total);
    $('.form-item-submitted-total-price input').val('£' + total);
      // $(this).parents('.group-show-size').find('h3').find('a').click();
    })
    // Cladding/dimension Price
    var cladding_price = $('.views-field-field-cladding-price .field-content').text().substring(1);
    $('.form-item-submitted-cladding-prie input').val('£' + cladding_price);
    var dimension_price = $('.views-field-field-dimension-price .field-content').text().substring(1);
    $('.form-item-submitted-dimention-price input').val('£' + dimension_price);
    var doors_price = $('.views-field-field-doors-price .field-content').text().substring(1);
    $('.form-item-submitted-doors-price input').val('£' + doors_price);

    // Trim Price
    function trim(){
      var trim_price = 0;
      $('.views-row').each(function(){
          var trims = $(this).find('.views-field-field-trim-price .field-content').text().substring(1);
          var tp = parseFloat(trim_price) || 0;
          var t = parseFloat(trims) || 0;
          trim_price =  tp + t;
          return true;
      });
      return trim_price;
    }
    var trim_p = trim();
    $('.form-item-submitted-trim-price input').val('£' + trim_p);
    // Windows Price
    function windo(){
      var window_price = 0;
      $('.views-row').each(function(){
          var windows = $(this).find('.views-field-field-window-pricr .field-content').text().substring(1);
          var wp = parseFloat(window_price) || 0;
          var w = parseFloat(windows) || 0;
          window_price =  wp + w;
          return true;
      });
      return window_price;
    }
    var window_p = windo();
    $('.form-item-submitted-windo-price input').val('£' + window_p);

    // Floor Heating Price
    function fheating(){
      var fheating_price = 0;
      $('.views-row').each(function(){
          var fheatings = $(this).find('.views-field-field-electric-heater-price .field-content').text().substring(1);
          var tp = parseFloat(fheating_price) || 0;
          var t = parseFloat(fheatings) || 0;
          fheating_price =  tp + t;
          return true;
      });
      return fheating_price;
    }
    var fheating_p = fheating();
    $('.form-item-submitted-under-floor-heating-price input').val('£' + fheating_p);

    // Total Price
    var total = parseFloat(cladding_price) + parseFloat(dimension_price) + parseFloat(size_price) +
                parseFloat(doors_price) + parseFloat(trim_p) + parseFloat(window_p) + parseFloat(fheating_p); 
    $('span#total-price').html(total);
    $('.form-item-submitted-total-price input').val('£' + total);

    // Disable Winow Check Box
    var sibelrc = $('#edit-field-cladding-tid option:first-child').attr('selected');
    var dimver  = $('#edit-field-dimention-tid-12').attr('checked');
    if((sibelrc == 'selected') && (dimver == 'checked')) {
      $('.form-item-edit-field-windows-tid-24').css('pointer-events', 'none').css('color', '#cfcfcf');
    } else {
      $('.form-item-edit-field-windows-tid-24').css('pointer-events', 'all').css('color', '#555');
    }

    // SET BLOG AND MODULE IMAGE AS BACKGROUND IMAGE
    $('.view-id-blog_view .blog-listing').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '240px');;
    });
    $(".view.view-blog-view.view-id-blog_view.view-display-id-blog .pager li > a").html("LOAD MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
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
// MODULE HOVER SLIDE
(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})
(function($) {
  'use strict';

  function Hoverdir(element, options) {
    this.$el = $(element);
    // set options
    this.options = $.extend(true, {}, this.defaults, options);
    // initialize visibility to false for show and hide method
    this.isVisible = false;
    // get the hover for this element
    this.$hoverElem = this.$el.find(this.options.hoverElem);
    // transition properties
    this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
    // support for CSS transitions
    this.support = this._supportsTransitions();
    // load the events
    this._loadEvents();
  }
  Hoverdir.prototype = {
    defaults: {
      speed: 300,
      easing: 'ease',
      hoverDelay: 0,
      inverse: false,
      hoverElem: 'div'
    },
    constructor: Hoverdir,
    /**
     * Detect if CSS transitions are supported
     *
     * @return {Boolean}
     */
    _supportsTransitions: function() {
      if (typeof Modernizr !== 'undefined') {
        return Modernizr.csstransitions;
      } else {
        var b = document.body || document.documentElement,
          s = b.style,
          p = 'transition';
        if (typeof s[p] === 'string') {
          return true;
        }
        // Tests for vendor specific prop
        var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
        p = p.charAt(0).toUpperCase() + p.substr(1);
        for (var i = 0; i < v.length; i++) {
          if (typeof s[v[i] + p] === 'string') {
            return true;
          }
        }
        return false;
      }
    },
    /**
     * Bind the events to the element
     */
    _loadEvents: function() {
      this.$el.on('mouseenter.hoverdir mouseleave.hoverdir', $.proxy(function(event) {
        this.direction = this._getDir({
          x: event.pageX,
          y: event.pageY
        });
        if (event.type === 'mouseenter') {
          this._showHover();
        } else {
          this._hideHover();
        }
      }, this));
    },
    /**
     * Show the hover of the element
     */
    _showHover: function() {
      var styleCSS = this._getStyle(this.direction);
      if (this.support) {
        this.$hoverElem.css('transition', '');
      }
      this.$hoverElem.hide().css(styleCSS.from);
      clearTimeout(this.tmhover);
      this.tmhover = setTimeout($.proxy(function() {
        this.$hoverElem.show(0, $.proxy(function() {
          if (this.support) {
            this.$hoverElem.css('transition', this.transitionProp);
          }
          this._applyAnimation(styleCSS.to);
        }, this));
      }, this), this.options.hoverDelay);
      this.isVisible = true;
      console.log(this.isVisible);
    },
    /**
     * Hide the hover to the element
     */
    _hideHover: function() {
      var styleCSS = this._getStyle(this.direction);
      if (this.support) {
        this.$hoverElem.css('transition', this.transitionProp);
      }
      clearTimeout(this.tmhover);
      this._applyAnimation(styleCSS.from);
      this.isVisible = false;
    },
    /**
     * get the direction when the event is triggered
     * credits : http://stackoverflow.com/a/3647634
     *
     * @param {Object} coordinates
     * @returns {Interger}
     */
    _getDir: function(coordinates) {
      // the width and height of the current div
      var w = this.$el.width(),
        h = this.$el.height(),
        // calculate the x and y to get an angle to the center of the div from that x and y.
        // gets the x value relative to the center of the DIV and "normalize" it
        x = (coordinates.x - this.$el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
        y = (coordinates.y - this.$el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
        // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
        // first calculate the angle of the point,
        // add 180 deg to get rid of the negative values
        // divide by 90 to get the quadrant
        // add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
        direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
      return direction;
    },
    /**
     * get the style when the event is triggered
     *
     * @param {(Interger|String)} direction
     * @returns {Object}
     */
    _getStyle: function(direction) {
      var fromStyle, toStyle,
        slideFromTop = {
          'left': '0',
          'top': '-100%'
        },
        slideFromBottom = {
          'left': '0',
          'top': '100%'
        },
        slideFromLeft = {
          'left': '-100%',
          'top': '0'
        },
        slideFromRight = {
          'left': '100%',
          'top': '0'
        },
        slideTop = {
          'top': '0'
        },
        slideLeft = {
          'left': '0'
        };
      switch (direction) {
        case 0:
        case 'top':
          // from top
          fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
          toStyle = slideTop;
          break;
        case 1:
        case 'right':
          // from right
          fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
          toStyle = slideLeft;
          break;
        case 2:
        case 'bottom':
          // from bottom
          fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
          toStyle = slideTop;
          break;
        case 3:
        case 'left':
          // from left
          fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
          toStyle = slideLeft;
          break;
      }
      return {
        from: fromStyle,
        to: toStyle
      };
    },
    /**
     * Apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
     *
     * @param {Object} styleCSS
     */
    _applyAnimation: function(styleCSS) {
      $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
      this.$hoverElem.stop().applyStyle(styleCSS, $.extend(true, [], {
        duration: this.options.speed
      }));
    },
    /**
     * Hide $hoverElem from the direction in argument
     *
     * @param {String} [direction=bottom] direction
     */
  };
  $.fn.hoverdir = function(option, parameter) {
    return this.each(function() {
      var data = $(this).data('hoverdir');
      var options = typeof option === 'object' && option;
      // Initialize hoverdir.
      if (!data) {
        data = new Hoverdir(this, options);
        $(this).data('hoverdir', data);
      }
      // Call hoverdir method.
      if (typeof option === 'string') {
        data[option](parameter);
        if (option === 'destroy') {
          $(this).data('hoverdir', false);
        }
      }
    });
  };
  $.fn.hoverdir.Constructor = Hoverdir;
});
// loading page
document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('loading').style.visibility = "hidden";
    }, 1000);
  }
}



