//
//  loader.jquery.js
//  Loader Plugin Version 1.0
//	Loader Plugin for preloading images and background images
//
//  Created by Robbie Bardijn on 2012-05-22.
//  Copyright 2012 Robbie Bardijn. All rights reserved.
//
(function($) {
	$.fn.preload = function(kind, callBackObj){
		// =======================
		// = CHECKING PARRAMTERS =
		// =======================
		//kind can be:-image, -background-image
		
		//CHECK ON AT LEAST 1 PARRAMETER
		if (callBackObj === undefined && kind === undefined) {
			throw "ERROR : preload function must be given at least one parrameter";
		}
		
		//KIND IS NOT SPECIFFIED
		if(typeof(kind) !== "string"){
			callBackObj = kind;
			kind = undefined;
		}
		
		//OBJECT IS PASSED
		if(typeof(callBackObj) === "object"){
			if (callBackObj.completeCallBack === undefined || (callBackObj.completeCallBack instanceof Function === false)) {
				throw "you must specify a completeCallBack key in a callBackObj object, the value of this key Must be a function";
			}
			if (callBackObj.startCallBack instanceof Function === false && callBackObj.startCallBack !== undefined) {
				throw "If you specify a startCallBack key, the value of this key Must be a function";
			}else{
				if(callBackObj.startCallBack === undefined){
					callBackObj.startCallBack = function(){};
				}
			}
			if (callBackObj.endCallBack instanceof Function === false && callBackObj.endCallBack !== undefined) {
				throw "If you specify a endCallBack key, the value of this key Must be a function";
			}else{
				if(callBackObj.endCallBack === undefined){
					callBackObj.endCallBack = function(){};
				}
			}
		}
		
		//FUNCTION IS PASSED
		if(callBackObj instanceof Function){
			callBackObj = {
				completeCallBack: callBackObj,
				startCallBack: function(){},
				endCallBack: function(){}
			};
		}
		
		// =================
		// = FUNCTIONALITY =
		// =================
		//1 ELEMENT FOUND
		if (this.children().length === 0) {
			callBackObj.startCallBack(this);
			
			//IMAGE
			if(kind === "image"){
				if(this.get(0).nodeName.toLowerCase() === "img"){
					var sel = this;
					var img = new Image();
					if (img.addEventListener) {
						// W3C DOM
						img.addEventListener("load", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						},
						false);
					} else if (img.attachEvent) {
						// IE DOM
						img.attachEvent("onload", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						});
					}
					img.src = this[0].src;	
				}
			}
			
			//BACKGROUND IMAGE
			if(kind === "background-image"){
				if (this.css('background-image') !== "none" && this.css('background-image').indexOf("url") !== -1) {
					var sel = this;
					var img = new Image();
					if (img.addEventListener) {
						// W3C DOM
						img.addEventListener("load", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						},
						false);
					} else if (img.attachEvent) {
						// IE DOM
						img.attachEvent("onload", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						});
					}
					//stripping single, double quotes and spaces
					var str = sel.css('background-image').replace(/(\"|\'|\ )/g, "");
					//array for multiple backgrounds
					var images = str.split(',');
					for (var i = 0; i < images.length; i++) {
						img.src = images[i].substring(4, images[i].length - 1);
					}
				} else {
					callBackObj.completeCallBack(this);
					callBackObj.endCallBack(this);
				}
			}
			
			//KIND UNDEFINED
			if(kind === undefined){
				if(this.get(0).nodeName.toLowerCase() === "img"){
					var sel = this;
					var img = new Image();
					if (img.addEventListener) {
						// W3C DOM
						img.addEventListener("load", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						},
						false);
					} else if (img.attachEvent) {
						// IE DOM
						img.attachEvent("onload", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						});
					}
					img.src = this[0].src;	
				}
				if (this.css('background-image') !== "none" && this.css('background-image').indexOf("url") !== -1) {
					var sel = this;
					var img = new Image();
					if (img.addEventListener) {
						// W3C DOM
						img.addEventListener("load", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						},
						false);
					} else if (img.attachEvent) {
						// IE DOM
						img.attachEvent("onload", function() {
							callBackObj.completeCallBack(sel);
							callBackObj.endCallBack(sel);
						});
					}
					//stripping single, double quotes and spaces
					var str = sel.css('background-image').replace(/(\"|\'|\ )/g, "");
					//array for multiple backgrounds
					var images = str.split(',');
					for (var i = 0; i < images.length; i++) {
						img.src = images[i].substring(4, images[i].length - 1);
					}
				} else {
					callBackObj.completeCallBack(this);
					callBackObj.endCallBack(this);
				}
			}
		} else {
			//MORE ELEMENTS FOUND
			
			//KIND IMAGE
			if(kind === "image"){
				var found = this.find('img');
				callBackObj.startCallBack(found);
				//loadImages
				var cntLoaded = 0;
				found.each(function(index) {
					var load = $(this);
					var img = new Image();
					function imageloaded() {
						cntLoaded += 1;
						callBackObj.completeCallBack(load);
						if (found.length === cntLoaded) {
							callBackObj.endCallBack(found);
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
			
			//KIND BACKGROUND-IMAGE
			if(kind === "background-image"){
				var found = this.find("*").filter(function() {
					var retVal;
					if ($(this).css('background-image') !== "none" && $(this).css('background-image').indexOf("url") !== -1) {
						retVal = true;
					} else {
						retVal = false;
					}
					return retVal;
				});
				
				callBackObj.startCallBack(found);
				var cntLoaded = 0;
				found.each(function(index) {
					var load = $(this);
					var img = new Image();
					function imageloaded() {
						cntLoaded += 1;
						callBackObj.completeCallBack(load);
						if (found.length === cntLoaded) {
							callBackObj.endCallBack(found);
						}
					}
					if (img.addEventListener) {
						// W3C DOM
						img.addEventListener("load", imageloaded, false);
					} else if (img.attachEvent) {
						// IE DOM
						img.attachEvent("onload", imageloaded);
					}
					//stripping single, double quotes and spaces
					var str = load.css('background-image').replace(/(\"|\'|\ )/g, "");
					//array for multiple backgrounds
					var images = str.split(',');
					for (var i = 0; i < images.length; i++) {
						img.src = images[i].substring(4, images[i].length - 1);
					}
				});
			}
			
			//KIND UNDEFINED
			if(kind === undefined){
				var foundimg = this.find('img');
				var foundbgimg = this.find("*").filter(function() {
					var retVal;
					if ($(this).css('background-image') !== "none" && $(this).css('background-image').indexOf("url") !== -1) {
						retVal = true;
					} else {
						retVal = false;
					}
					return retVal;
				});
				
				var found = foundimg.add(foundbgimg);
				callBackObj.startCallBack(found);
				//loadImages
				var cntLoaded = 0;
				found.each(function(index) {
					var load = $(this);
					var img = new Image();
					function imageloaded() {
						cntLoaded += 1;
						callBackObj.completeCallBack(load);
						if (found.length === cntLoaded) {
							callBackObj.endCallBack(found);
						}
					}
					if (img.addEventListener) {
						// W3C DOM
						img.addEventListener("load", imageloaded, false);
					} else if (img.attachEvent) {
						// IE DOM
						img.attachEvent("onload", imageloaded);
					}
					if (load.get(0).nodeName.toLowerCase() === "img") {
						img.src = load.context.src;
					} else {
						//stripping single, double quotes and spaces
						var str = load.css('background-image').replace(/(\"|\'|\ )/g, "");
						//array for multiple backgrounds
						var images = str.split(',');
						for (var i = 0; i < images.length; i++) {
							img.src = images[i].substring(4, images[i].length - 1);
						}
					}
				});
			}
		}
	};
})(jQuery);
