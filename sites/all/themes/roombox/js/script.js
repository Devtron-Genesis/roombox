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
    var y=$(window).height();
    $('section#block-bean-main-slider-0').css('height', y-80);


$('<p>Share On Social Media:</p>').appendTo('.os-share-widget-interface.share-container');


// RESIZING OF CTA
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop < 2050) {
        $('.xtranslate').stop().animate({width: "70%"},200);
    } else if (scrollTop > 2050 && scrollTop < 2100) {
        $('.xtranslate').stop().animate({width: "80%"},200);
    }  else if (scrollTop > 2100 && scrollTop < 2250) {
        $('.xtranslate').stop().animate({width: "90%"},200);
    }  else {
        $('.xtranslate').stop().animate({width: "100%"},200);
    } 
});

// MENU SHRINK
    $(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 50){
      $(".header-top-menu").addClass("head-shrink");
      $("section#block-system-main-menu").addClass("nav-shrink");
      $("a.logo.navbar-btn.pull-left img").addClass("logo-shrink");
    }
    else
    {
      $(".header-top-menu").removeClass("head-shrink");
      $("section#block-system-main-menu").removeClass("nav-shrink");
      $("a.logo.navbar-btn.pull-left img").removeClass("logo-shrink");
    }
  });

// SROLL DOWN ARROW
$(".arrow-down a").click(function() {
    $('html,body').animate({
        scrollTop: $(".arrow-down a").offset().top},
        'slow');
});

  // SMOOTH SCROLL SLIDER TEXT
  redrawDotNav();  
  /* Scroll event handler */
    $(window).bind('scroll',function(e){
      parallaxScroll();
      redrawDotNav();
    });
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.field.field-name-field-slider-heading.field-type-text.field-label-hidden').css('top',(130-(scrolled*.7))+'px');
    $('.field.field-name-field-half-third-description.field-type-text-long.field-label-hidden').css('top',(432-(scrolled*.7))+'px');
    $('.field.field-name-field-half-third-link.field-type-link-field.field-label-hidden').css('top',(520-(scrolled*.7))+'px');
  }
  function redrawDotNav(){
    var section1Top =  0;  
  }
  // SET SLIDER, BLOG AND MODULE IMAGE AS BACKGROUND IMAGE

    $('.node-other-pages').each(function(){
      var hdr_bg_img = $(this).find('img').attr('src');
      $(this).find('header').css("background-image", 'url("'+ hdr_bg_img +'")').css('background-size', 'cover').css('height', '562px');
    });

    $('.view-id-blog_view td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '240px');
    });

    $('section#block-bean-benefits-0').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover');
    });

    $('section#block-bean-uses').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover');
    });

    $('.header-wrapper .header-top-links > div').removeClass('container');
    $('.header-wrapper .header-top-menu > div').removeClass('container');
    // ADD SPACE IN LOAD MORE
    $(".page-home section#block-views-blog-view-block .pager li > a").html("LOAD MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
// MODULE HOVER SLIDE
        $(function () {
          $(' #da-thumbs > li ').hoverdir();
        });
  });
    console.log('Document Ready');
  // });
  $(document).ajaxComplete(function(e) {

  // SET BLOG AND MODULE IMAGE AS BACKGROUND IMAGE
    $('.view-id-blog_view td').each(function() {
      var bg_img = $(this).find('img').attr('src');
      $(this).css("background-image", 'url("' + bg_img + '")').css('background-size', 'cover').css('height', '240px');;
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
// MODULE HOVER SLIDE
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})
(function ($) {
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
        _supportsTransitions: function () {
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
        _loadEvents: function () {
            this.$el.on('mouseenter.hoverdir mouseleave.hoverdir', $.proxy(function (event) {
                this.direction = this._getDir({x: event.pageX, y: event.pageY});

                if (event.type === 'mouseenter') {
                    this._showHover();
                }
                else {
                    this._hideHover();
                }
            }, this));
        },
        /**
         * Show the hover of the element
         */
        _showHover: function () {
            var styleCSS = this._getStyle(this.direction);

            if (this.support) {
                this.$hoverElem.css('transition', '');
            }

            this.$hoverElem.hide().css(styleCSS.from);
            clearTimeout(this.tmhover);

            this.tmhover = setTimeout($.proxy(function () {
                this.$hoverElem.show(0, $.proxy(function () {
                    if (this.support) {
                        this.$hoverElem.css('transition', this.transitionProp);
                    }
                    this._applyAnimation(styleCSS.to);

                }, this));
            }, this), this.options.hoverDelay);

            this.isVisible = true;
        },
        /**
         * Hide the hover to the element
         */
        _hideHover: function () {
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
        _getDir: function (coordinates) {
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
        _getStyle: function (direction) {
            var fromStyle, toStyle,
                slideFromTop = {'left': '0', 'top': '-100%'},
            slideFromBottom = {'left': '0', 'top': '100%'},
            slideFromLeft = {'left': '-100%', 'top': '0'},
            slideFromRight = {'left': '100%', 'top': '0'},
            slideTop = {'top': '0'},
            slideLeft = {'left': '0'};
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
            return {from: fromStyle, to: toStyle};
        },
        /**
         * Apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
         *
         * @param {Object} styleCSS
         */
        _applyAnimation: function (styleCSS) {
            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            this.$hoverElem.stop().applyStyle(styleCSS, $.extend(true, [], {duration: this.options.speed}));
        },
        /**
         * Hide $hoverElem from the direction in argument
         *
         * @param {String} [direction=bottom] direction
         */
    };
    $.fn.hoverdir = function (option, parameter) {
        return this.each(function () {
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

