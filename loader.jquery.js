//
//  loader.jquery.js
//  Loader Plugin Version 1.0
//	Loader Plugin for preloading images and background images
//
//  Created by Robbie Bardijn on 2012-05-22.
//  Copyright 2012 Robbie Bardijn. All rights reserved.
//
(function($) {
    $.fn.preloadImage = function(completeCallBack, startCallBack, endCallBack) {
        if (endCallBack === undefined) {
            endCallBack = function() {};
        }
        if (startCallBack === undefined) {
            startCallBack = function() {};
        }

        //EXPLICIT PARRAMS
        if (completeCallBack === undefined) {
            throw "ERROR : The completeCallBack should be a function that will be called on loading complete";
        }
        //searchImages
        if (this.children().length === 0) {
            startCallBack(this);
            var sel = this;
            var img = new Image();
            if (img.addEventListener) {
                // W3C DOM
                img.addEventListener("load",
                function() {
                    completeCallBack(sel);
                    endCallBack(sel);
                },
                false);
            } else if (img.attachEvent) {
                // IE DOM
                img.attachEvent("onload",
                function() {
                    completeCallBack(sel);
                    endCallBack(sel);
                });
            }
            img.src = this[0].src;
        } else {
            var found = this.find('img');
            startCallBack(found);
            //loadImages
            var cntLoaded = 0;
            found.each(function(index) {

                var load = $(this);
                var img = new Image();
                function imageloaded() {
                    cntLoaded += 1;
                    completeCallBack(load);
                    if (found.length === cntLoaded) {
                        endCallBack(found);
                    }
                }

                if (img.addEventListener) {
                    // W3C DOM
                    img.addEventListener("load", imageloaded, false);
                } else if (img.attachEvent) {
                    // IE DOM
                    img.attachEvent("onload", imageloaded);
                }
                img.src = load.context.src;

            });
        }
    };

    $.fn.preloadBackgroundImage = function(completeCallBack, startCallBack, endCallBack) {
        if (endCallBack === undefined) {
            endCallBack = function() {};
        }
        if (startCallBack === undefined) {
            startCallBack = function() {};
        }

        //EXPLICIT PARRAMS
        if (completeCallBack === undefined) {
            throw "ERROR : The completeCallBack should be a function that will be called on loading complete";
        }

        // find background images
        if (this.children().length === 0) {
            startCallBack(this);
            if (this.css('background-image') !== "none") {
     						var sel = this;
                var img = new Image();
                if (img.addEventListener) {
                    // W3C DOM
                    img.addEventListener("load",
                    function() {
                        completeCallBack(sel);
                        endCallBack(sel);
                    },
                    false);
                } else if (img.attachEvent) {
                    // IE DOM
                    img.attachEvent("onload",
                    function() {
                        completeCallBack(sel);
                        endCallBack(sel);
                    });
                }
							//stripping single and double quotes + spaces
						 	var str = load.css('background-image').replace(/(\"|\'|\ )/g, "");
							//array for multiple backgrounds
							var images = str.split(',');
				
							for(var i= 0; i < images.length ; i++){
								img.src = images[i].substring(4, images[i].length - 1);
							}
            } else {
                completeCallBack(this);
                endCallBack(this);
            }
        } else {
            var found = this.find("*").filter(function() {
                var retVal;
                if ($(this).css('background-image') !== "none") {
                    retVal = true;
                } else {
                    retVal = false;
                }
                return retVal;
            });
						
            startCallBack(found);
            var cntLoaded = 0;
            found.each(function(index) {
                var load = $(this);
                var img = new Image();
                function imageloaded() {
                    cntLoaded += 1;
                    completeCallBack(load);
                    if (found.length === cntLoaded) {
                        endCallBack(found);
                    }
                }

                if (img.addEventListener) {
                    // W3C DOM
                    img.addEventListener("load", imageloaded, false);
                } else if (img.attachEvent) {
                    // IE DOM
                    img.attachEvent("onload", imageloaded);
                }
								
                //stripping single and double quotes + spaces
                var str = load.css('background-image').replace(/(\"|\'|\ )/g, "");
								//array for multiple backgrounds
								var images = str.split(',');
								
								for(var i= 0; i < images.length ; i++){
									img.src = images[i].substring(4, images[i].length - 1);
								}
            });
        }
    };
})(jQuery);