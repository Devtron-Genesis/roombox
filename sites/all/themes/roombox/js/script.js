(function($) {
  $(document).mouseup(function(e) {
    console.log('mouseup');
  });
  $(document).delegate('', 'click', function(event) {
    console.log('delegate');
  });
  $(window).load(function(e) {
    console.log('Load Completed');
  });
  $(document).ready(function() {
    $('.match-height').matchHeight();


// CONTACT FORM((
$('.cntct-form form#webform-client-form-31 .form-actions button.webform-submit').removeClass("btn-primary");
$('.cntct-form form#webform-client-form-31 .form-actions button.webform-submit').addClass("btn-style");
$(".cntct-form ").parent().find("#edit-submitted-name").attr("placeholder", "First Name").css({'color':'#333'});
$(".cntct-form ").parent().find("#edit-submitted-last-name").attr("placeholder", "Last Name");
$(".cntct-form ").parent().find("#edit-submitted-email-address").attr({"placeholder": "*Email","color":"#000"});
$(".cntct-form ").parent().find("#edit-submitted-telephone-number").attr("placeholder", "Telephone");
$(".cntct-form ").parent().find("#edit-submitted-message").attr("placeholder", "Message...");
$(".cntct-form ").parent().find("#edit-submitted-message").attr("placeholder", "Message...");

// $('a.facebook.share-provider.flat.square.size-32.horizontal').removeAttr();
// $('a.facebook.share-provider.flat.square.size-32.horizontal').append($("<i class='.fa fa-facebook-square fa-3x'></i>"));

// MODULE HOVER SLIDE  EFFECT
$(function() {
  $(' #da-thumbs > li ').hoverdir();
});
$(' #da-thumbs > li ').append('<a class="field-content module-btn-style btn-listing" href="http://roombox.local.com/">CALL TO ACTION</a> ');

// MORE INFO IN PRODUCT PAGE
$('.entity.entity-bean.bean-module-info.view-mode-default .field.field-name-field-more-info').addClass('fa').addClass('fa-chevron-circle-down');
$('.entity.entity-bean.bean-module-info.view-mode-default .field.field-name-field-more-info').click(function() {
  $(this).parent().find('.group-info-inner-section.field-group-div.speed-fast.effect-none').slideToggle('slow');
  $(this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
});


$(".field-group-format-wrapper a").append('<span><i class="fa fa-info-circle"></i></span>').css({'display':'inline-block', 'font-size':'15px','float':'left'});
$('.field-group-format-wrapper a').removeAttr("href");
$('.field-group-format-wrapper a').removeAttr("class");

// Set slider height according to window height
var y = $(window).height();
$('section#block-bean-main-slider-0').css('height', y - 24);
$('section#block-block-18 .cntct-btn a').css('top', y - 67);
$('body.node-type-other-pages article.node-other-pages header').css('height', y - 80);
$('.node-type-other-pages .arrow-down').css('top', y - 110);
console.log(y);
$('<p>Share On Social Media:</p>').appendTo('.os-share-widget-interface.share-container');


// RESIZING OF CTA
// $(document).on("scroll", function(){
//   if ($(document).scrollTop()>1850){
//     var scrolled = $(window).scrollTop();
//     $('.front .xtranslate').css('width', (80 + ((scrolled - 1850) * .05)) + '%');
//   }
// });
// $(document).on("scroll", function(){
//   if ($(document).scrollTop()>600){
//     var scrolled = $(window).scrollTop();
//     $('.page-node-20 .xtranslate').css('width', (80 + ((scrolled - 600) * .05)) + '%');
//   }
// });
// $(document).on("scroll", function(){
//   if ($(document).scrollTop()>1900){
//     var scrolled = $(window).scrollTop();
//     $('.page-node-21 .xtranslate').css('width', (80 + ((scrolled - 1900) * .05)) + '%');
//   }
// });
// $(document).on("scroll", function(){
//   if ($(document).scrollTop()>1750){
//     var scrolled = $(window).scrollTop();
//     $('.page-node-22 .xtranslate').css('width', (80 + ((scrolled - 1750) * .05)) + '%');
//   }
// });
// $(document).on("scroll", function(){
//   if ($(document).scrollTop()>1950){
//     var scrolled = $(window).scrollTop();
//     $('.page-node-23 .xtranslate').css('width', (80 + ((scrolled - 1950) * .05)) + '%');
//   }
// });


  (function($) {
    function mediaSize() {
      if (window.matchMedia('(width: 1280px)').matches) {
        $(document).on("scroll", function() {
          if ($(document).scrollTop() > 1600) {
            var scrolled = $(window).scrollTop();
            $('.front .xtranslate').css('width', (78 + ((scrolled - 1600) * .03)) + '%');
          }
           if ($(document).scrollTop() > 400) {
            var scrolled = $(window).scrollTop();
            $('.page-node-20 .xtranslate').css('width', (79 + ((scrolled - 400) * .03)) + '%');
          }
          if ($(document).scrollTop() > 1850) {
            var scrolled = $(window).scrollTop();
            $('.page-node-21 .xtranslate,.page-node-23 .xtranslate').css('width', (83 + ((scrolled - 1850) * .03)) + '%');
          }
          if ($(document).scrollTop() > 1700) {
            var scrolled = $(window).scrollTop();
            $('.page-node-22 .xtranslate').css('width', (83 + ((scrolled - 1700) * .03)) + '%');
          }
        });
      }
      else if (window.matchMedia('(width: 1024px)').matches) {
        $(document).on("scroll", function(){
          if ($(document).scrollTop()>1450){
            var scrolled = $(window).scrollTop();
            $('.front .xtranslate').css('width', (75 + ((scrolled - 1450) * .04)) + '%');
          }
           else if ($(document).scrollTop() > 700) {
            var scrolled = $(window).scrollTop();
            $('.page-node-20 .xtranslate').css('width', (80 + ((scrolled - 700) * .04)) + '%');
          }
        });
      }
      else if (window.matchMedia('(width: 1440px)').matches) {
        $(document).on("scroll", function(){
          if ($(document).scrollTop()>1850){
            var scrolled = $(window).scrollTop();
            $('.front .xtranslate').css('width', (75 + ((scrolled - 1850) * .05)) + '%');
          }
           if ($(document).scrollTop()>550){
            var scrolled = $(window).scrollTop();
            $('.page-node-20 .xtranslate').css('width', (75 + ((scrolled - 550) * .05)) + '%');
          }
          if ($(document).scrollTop() > 1950) {
            var scrolled = $(window).scrollTop();
            $('.page-node-21 .xtranslate,.page-node-23 .xtranslate').css('width', (75 + ((scrolled - 1950) * .05)) + '%');
          }
          if ($(document).scrollTop() > 1900) {
            var scrolled = $(window).scrollTop();
            $('.page-node-22 .xtranslate').css('width', (80 + ((scrolled - 1900) * .04)) + '%');
          }
        });
      }
      else if (window.matchMedia('(width: 1680px)').matches) {
        $(document).on("scroll", function(){
          if ($(document).scrollTop()>2000){
            var scrolled = $(window).scrollTop();
            $('.front .xtranslate').css('width', (70 + ((scrolled - 2000) * .05)) + '%');
          }
          else if ($(document).scrollTop()>600){
            var scrolled = $(window).scrollTop();
            $('.page-node-20 .xtranslate').css('width', (75 + ((scrolled - 600) * .05)) + '%');
          }
           if ($(document).scrollTop() > 2050) {
            var scrolled = $(window).scrollTop();
            $('.page-node-21 .xtranslate,.page-node-23 .xtranslate').css('width', (75 + ((scrolled - 2050) * .05)) + '%');
          }
          if ($(document).scrollTop() > 2200) {
            var scrolled = $(window).scrollTop();
            $('.page-node-22 .xtranslate').css('width', (80 + ((scrolled - 2200) * .04)) + '%');
          }
        });
      }
      else if (window.matchMedia('(width: 1920px)').matches) {
        $(document).on("scroll", function(){
          if ($(document).scrollTop()>2340){
            var scrolled = $(window).scrollTop();
            $('.front .xtranslate').css('width', (75 + ((scrolled - 2340) * .05)) + '%');
          }
           if ($(document).scrollTop()>650){
            var scrolled = $(window).scrollTop();
            $('.page-node-20 .xtranslate').css('width', (75 + ((scrolled - 650) * .05)) + '%');
          }
           if ($(document).scrollTop()>2200){
            var scrolled = $(window).scrollTop();
            $('.page-node-21 .xtranslate,.page-node-23 .xtranslate').css('width', (75 + ((scrolled - 2200) * .05)) + '%');
          }
          if ($(document).scrollTop()>2300){
            var scrolled = $(window).scrollTop();
            $('.page-node-22 .xtranslate').css('width', (75 + ((scrolled - 2300) * .05)) + '%');
          }
        });
      }
      else if (window.matchMedia('(width: 2880px)').matches) {
        $(document).on("scroll", function(){
          if ($(document).scrollTop()>3100){
            var scrolled = $(window).scrollTop();
            $('.front .xtranslate').css('width', (70 + ((scrolled - 3100) * .05)) + '%');
          }
          if ($(document).scrollTop()>700){
            var scrolled = $(window).scrollTop();
            $('.page-node-20 .xtranslate').css('width', (75 + ((scrolled - 700) * .05)) + '%');
          }
          if ($(document).scrollTop()>2750){
            var scrolled = $(window).scrollTop();
            $('.page-node-21 .xtranslate,.page-node-23 .xtranslate').css('width', (75 + ((scrolled - 2750) * .05)) + '%');
          }
          if ($(document).scrollTop()>2350){
            var scrolled = $(window).scrollTop();
            $('.page-node-22 .xtranslate').css('width', (70 + ((scrolled - 2350) * .06)) + '%');
          }
        });
      }
     else {
        $('body, strong').removeAttr('style');
      }
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
  })(jQuery);


// MENU SHRINK
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 0) {
    $(".header-top-menu").addClass("head-shrink");
    $("section#block-system-main-menu").addClass("nav-shrink");
    $("a.logo.navbar-btn.pull-left img").addClass("logo-shrink");
  } else {
    $(".header-top-menu").removeClass("head-shrink");
    $("section#block-system-main-menu").removeClass("nav-shrink");
    $("a.logo.navbar-btn.pull-left img").removeClass("logo-shrink");
  }
});

// SCROLL DOWN ARROW
$(".arrow-down a").click(function() {
  $('html,body').animate({
    scrollTop: $(".arrow-down a").offset().top
  }, 'slow');
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
  $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '240px').css('overflow','hidden');
});
$('section#block-bean-benefits-0').each(function() {
  var bg_img = $(this).find('img').attr('src');
  $(this).css("background-image", 'url("' + bg_img + '")').css({'background-size': 'cover', 'background' : '#ECECEC'});
});
$('section#block-bean-uses').each(function() {
  var bg_img = $(this).find('img').attr('src');
  $(this).css("background-image", 'url("' + bg_img + '")').css({'background-size': 'cover', 'background' :'#ececec', 'color':'#212121'});
});
$('.header-wrapper .header-top-links > div').removeClass('container');
$('.header-wrapper .header-top-menu > div').removeClass('container');

// ADD SPACE IN LOAD MORE
$(".view.view-blog-view.view-id-blog_view.view-display-id-blog .pager li > a").html("LOAD MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
});

console.log('Document Ready');

$(document).ajaxComplete(function(e) {

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

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
    setTimeout(function(){
      document.getElementById('interactive');
      document.getElementById('loading').style.visibility="hidden";
    },1000);
  }
}

