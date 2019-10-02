/**
 * Created by Richard on 19/09/2016.
 */

//console.log('ACTIMBER');
ACTIMBER = {
    common: {
        init: function () {
            'use strict';
            //uncomment to debug
            console.log('common 123');

            //add js class
            jQuery('body').addClass('js');
            //jQuery("[data-fitvid]").fitVids();

            // var showButton = jQuery('[data-control=faq]');
            // var container = jQuery('[data-container=faq]');
            // ACTIMBER.fn.actStateToggle(container, showButton);


            jQuery('[data-control]').each(function () {
                console.log('data-state');
                var control = jQuery(this)
                var controlId = control.attr('data-control');

                var controlSelector = (controlId != '' )? '[data-control='+ controlId + ']' : '[data-control]'


                var controlGroupId = control.attr('data-state-group');

                var containerSelector = (controlId != '' )? '[data-container='+ controlId + ']' : '[data-container]'

                var container = jQuery(containerSelector);

                var controls = jQuery(controlSelector);


                control.on('click',  function (e) {
                    var state = control.attr('data-state');
                    e.preventDefault();
                    ACTIMBER.fn.actStateToggleSelect(controls, state);
                    console.log('clicked data-state');
                    if (controlGroupId){
                        console.log('group');
                        ACTIMBER.fn.actStateToggleGroup(control, controlGroupId);
                    }else{
                        console.log('Not group');
                        console.log(container);
                        //ACTIMBER.fn.actStateToggle(container, control);
                        ACTIMBER.fn.actStateToggleSelect(container, state);
                    }
                })

            });

            /**
             * navigation.js
             *
             * Handles toggling the navigation menu for small screens.
             */
            //( function() {
            //  var container, button, menu;
            //
            //  container = document.getElementById( 'main-navigation' );
            //  if ( ! container ) {
            //    return;
            //  }
            //
            //
            //  button = test;//document.getElementsByClassName( 'responsive-toggle' )[0];
            //  if ( 'undefined' === typeof button ) {
            //    button = container.querySelectorAll('.responsive-toggle')[0]
            //  }
            //  if ( 'undefined' === typeof button ) {
            //    return;
            //  }
            //
            //  menu = container.getElementsByTagName( 'ul' )[0];
            //
            //  // Hide menu toggle button if menu is empty and return early.
            //  if ( 'undefined' === typeof menu ) {
            //    button.style.display = 'none';
            //    return;
            //  }
            //
            //  menu.setAttribute( 'aria-expanded', 'false' );
            //
            //  if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
            //    menu.className += ' nav-menu';
            //  }
            //
            //  button.onclick = function() {
            //    if ( -1 !== container.className.indexOf( 'toggled' ) ) {
            //      container.className = container.className.replace( ' toggled', '' );
            //      button.setAttribute( 'aria-expanded', 'false' );
            //      menu.setAttribute( 'aria-expanded', 'false' );
            //    } else {
            //      container.className += ' toggled';
            //      button.setAttribute( 'aria-expanded', 'true' );
            //      menu.setAttribute( 'aria-expanded', 'true' );
            //    }
            //  };
            //} )();


        }
    },
    page: {
        init: function () {
            //uncomment to debug
            //console.log('pages');
        }
    },
    post: {
        init: function () {
            //uncomment to debug
            //console.log('posts');
        }
    },
    fn:{
        actSliderLayout : function () {
            jQuery('[data-slider]').each(function (i) {
                var jQueryslider = jQuery(this);
                var jQueryslides = jQueryslider.find('[data-slider-item]');
                var sliderHeight = jQueryslider.find('[data-slider-item]').outerHeight();
                var sliderWidth = jQueryslider.outerWidth();
                var sliderWindow = jQueryslider.find('[data-slider-window]');
                var sliderWindowWidth = sliderWindow.outerWidth();
                var jQuerysliderList = jQueryslider.find('[data-slider-list]');
                var currentItem = parseInt( jQuery('[data-slider-active]', this).attr('data-slider-active'));
                var posTop = sliderHeight - (sliderHeight * currentItem);
                var posLeft = sliderWidth - (sliderWidth * currentItem);
                var newItem = currentItem - 1;
                var slideDirection = 'vert';

                if(jQueryslider.hasClass('is-horizontal'))
                {
                    jQueryslides.css('width', sliderWindowWidth);
                    console.log('slider win width' + sliderWindowWidth);
                    console.log('is-horizontal');
                    slideDirection = 'horiz';

                }else{
                    console.log('not-horizontal')
                }

                if (slideDirection === 'horiz'){
                    //console.log('direction horiz');

                    var listWidth = sliderWindowWidth * jQueryslides.length;
                    jQuerysliderList.css('width',  listWidth);
                    jQuerysliderList.css('left' , posLeft);

                }else {
                    console.log('direction vert');
                    jQuerysliderList.css('top' , posTop);
                }

                console.log('jQueryslides.length');
                console.log(jQueryslides.length);

                jQueryslides.first().attr('data-active', 'on');

                console.log('sliderHeight');
                console.log(sliderHeight);



                //prev control
                jQuery(document).on('click', '.slider-scroll__btn--prev, .slider-nav__btn--nav-prev', function () {
                    console.log('click prev');

                    newItem = currentItem - 1;

                    if (newItem > 0){

                        jQuery('[data-active=on]').attr('data-active', 'off');
                        jQuery('[data-slider-active]').attr('data-slider-active', newItem);
                        jQuery('[data-slider-item='+newItem+']').attr('data-active', 'on');
                        jQuery('[data-slide-nav='+newItem+']').attr('data-active', 'on');

                        //set the active slide slide ID on the slide list
                        jQuerysliderList.attr('data-slider-active',newItem);

                        // Set the matching slide item to active
                        jQuerysliderList.find('[data-slider-active='+newItem+']').attr('data-active', 'on')

                        //reposition the slider list
                        posTop = sliderHeight - (sliderHeight * newItem);
                        posLeft = sliderWindowWidth - (sliderWindowWidth * newItem);
                        if(slideDirection === 'vert'){
                            jQuerysliderList.css('top' , posTop);

                        }else {
                            jQuerysliderList.css('left' , posLeft);
                        }
                        currentItem = newItem;
                    }
                });

                //next control
                jQuery(document).on('click', '.slider-scroll__btn--next, .slider-nav__btn--nav-next', function () {
                    console.log('click next');

                    newItem = currentItem + 1;

                    if (newItem <= jQueryslides.length){

                        jQuery('[data-active=on]').attr('data-active', 'off');
                        jQuery('[data-slider-active]').attr('data-slider-active', newItem);
                        jQuery('[data-slider-item='+newItem+']').attr('data-active', 'on');
                        jQuery('[data-slide-nav='+newItem+']').attr('data-active', 'on');

                        //set the active slide slide ID on the slide list
                        jQuerysliderList.attr('data-slider-active',newItem);

                        // Set the matching slide item to active
                        jQuerysliderList.find('[data-slider-active='+newItem+']').attr('data-active', 'on')

                        //reposition the slider list
                        posTop = sliderHeight - (sliderHeight * newItem);
                        posLeft = sliderWindowWidth - (sliderWindowWidth * newItem);
                        if(slideDirection === 'vert'){
                            jQuerysliderList.css('top' , posTop);

                        }else {
                            jQuerysliderList.css('left' , posLeft);
                        }
                        currentItem = newItem;
                    }
                });

                jQuery(document).on('click', '[data-slide-nav]', function () {

                    //set current active slide to off
                    jQuery('[data-active=on]').attr('data-active', 'off');

                    jQuery(this).attr('data-active','on');

                    //Get the ID of the click nav link
                    currentItem = jQuery(this).attr('data-slide-nav');

                    //set the active slide slide ID on the slide list
                    jQuerysliderList.attr('data-slider-active',currentItem);

                    // Set the matching slide item to active
                    jQuerysliderList.find('[data-slider-item='+currentItem+']').attr('data-active', 'on')

                    //reposition the slider list
                    posTop = sliderHeight - (sliderHeight * currentItem);
                    posLeft = sliderWindowWidth - (sliderWindowWidth * currentItem);
                    if(slideDirection === 'vert'){
                        jQuerysliderList.css('top' , posTop);

                    }else {
                        jQuerysliderList.css('left' , posLeft);
                    }

                    jQuery('[data-slider-active]').attr('data-slider-active', currentItem);

                })

            })

        },
        actElDimensions: function (selector) {
            if (selector == undefined){
                selector = 'html';
            }

            return {
                width : jQuery(selector).outerWidth(),
                height : jQuery(selector).outerHeight(),
            }
        },
        actStateToggleGroup : function (control, stateGroupId){
            $('[data-state-group='+stateGroupId+']').not(control).attr('data-state', 'off')
        },
        actStateToggleSelect : function (control, state) {
            if('off' === state ){
                control.attr('data-state', 'on');

            }
            if('on' === state){
                control.attr('data-state', 'off')
            }
        },
        actStateToggle: function (container, showButton, parent, listParent) {
            var elState = showButton.attr('data-state');
            var eventActOpen = new Event('actOpen');
            var eventActClose = new Event('actClose');
            showButton.on('click', function(e){
                e.preventDefault();
                elState = $(this).attr('data-state');
                console.log('elState');
                console.log(this);

                console.log(elState);

                if ('off' === elState ) {
                    console.log('click on');
                    $(this).attr('data-state', 'on');
                    $(container).attr('data-state', 'on');
                    $(parent).attr('data-state', 'on');
                    $(container).addClass('ac-on');
                    document.body.className += ' ' + 'container-is-open';
                    window.dispatchEvent(eventActOpen);

                } else {
                    console.log('click off');
                    $(this).attr('data-state', 'off');
                    $(container).attr('data-state', 'off');
                    $(parent).attr('data-state', 'off');
                    $(container).removeClass('ac-on');
                    document.querySelector('body').classList.remove('container-is-open');

                    window.dispatchEvent(eventActClose);
                }
            });
        },
        actStateClose: function (container, showButton, closeButton) {
            var elState = closeButton.attr('data-state');

            var eventActClose = new Event('actClose');

            // var eventActOpen = document.createEvent('Event');
            // eventActOpen.initEvent('actOpen', true, true);
            // var eventActClose = document.createEvent('Event');
            // eventActClose.initEvent('actClose', true, true);


            closeButton.on('click', function(e){
                e.preventDefault();
                elState = $(this).attr('data-state');

                console.log('click off');
                showButton.attr('data-state', 'off');
                closeButton.attr('data-state', 'off');
                $(container).attr('data-state', 'off');
                $(container).removeClass('ac-on');
                document.querySelector('body').classList.remove('container-is-open');

                window.dispatchEvent(eventActClose);

            });
        },
        actDefer: function(successMethod, failMethod, testMethod, pause, attempts) {
            var defTest = function () {

                if (typeof jQuery !== 'undefined') {
                    return true
                }
                return false;

            };
            //What to do if test is false
            var  defFail = function () {
                console.log('The deftest failed');
            }
            //What to do if test is true
            var  defSuccess = function () {
                console.log('The deftest passed');
            }
            attempts = (attempts === undefined)? false : attempts;
            pause = (pause === undefined)? 50 : pause;
            testMethod = (testMethod === undefined)? defTest : testMethod;
            failMethod = (failMethod === undefined)? defFail : failMethod;
            successMethod = (successMethod === undefined)? defSuccess : successMethod;


            if (testMethod()) {
                console.log('the testmethod')
                successMethod();
            } else {
                console.log('the failmethod')
                failMethod();
                if(attempts === false || attempts > 0) {
                    setTimeout(function () {
                        attempts = (attempts === false )? attempts : attempts - 1;
                        ACTIMBER.fn.actDefer(successMethod, failMethod, testMethod, pause, attempts)
                    }, pause);
                }
            }
        }
    },
    actSettings: {
        someSetting: false
    }
};

UTIL = {
    exec: function (template, handle) {
        var ns = ACTIMBER,
            handle = (handle === undefined) ? "init" : handle;

        if (template !== '' && ns[template] && typeof ns[template][handle] === 'function') {
            ns[template][handle]();
        }
    },
    init: function () {
        var body = document.body,
            template = body.getAttribute('data-post-type'),
            handle = body.getAttribute('data-post-slug');

        UTIL.exec('common');
        UTIL.exec(template);
        UTIL.exec(template, handle);
    }
};
jQuery(window).load(UTIL.init);