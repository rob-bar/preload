# preload
### Jquery Plugin for preloading images and background images


#### Description

	This javascript file is usseful for preloading images & css background images 	(also multiple background images)
	
	It is a jquery plugin, so you need to load it up with jquery.
	Feel free to adapt, use or share this file.
	Tested in all major browsers (until ie7).

#### Usage

**The plugin exists out of one function $(SELECTOR).preload():**

	This preload function can be used in different ways.	
**$(SELECTOR).preload("kind",callBackObject):**

	This is the function in his most advanced look
	kind can be 'image' or 'background-image'
	callBackObject is an object with 3 members
	1 explicit(completeCallBack) and 2 optional(startCallBack & endCallBack)
	{
		completeCallBack: function(loaded){},
		startCallBack: function(found){},
		endCallBack: function(terminated){}
	}
	these eventHandlers are called at the right moment in the loading process.
	
	CompleteCallBack: is called after the loading of one specific tag namely the loaded attriburte.
	startCallBack: is called after the preloader has found all of the corresponding tags namely found.
	endCallback: is called after the preloader has loaded all the tags namely the 	terminated attribute.
	
	note:loaded, found, terminated can be renamed at your choise
	

**$(SELECTOR).preload(callBackObject):**
	
	If kind is not specified images and background images are preloaded

**$(SELECTOR).preload(function( ){ //onComplete functionality; }):**

	for fast preloading you can just pass in a function this wil be handled as the 	completeCallBack handler.
	This functionality is particulary handy when you just want to preload one image.
	
#### Examples

	The examples can be found in the examples folder.
	
	$('#single').preload({
	completeCallBack: function(loaded){
		found.css('opacity',1);
		Debugger.log("completeCallBack");
	},
	startCallBack: function(found){
		found.each(function(){
			//addvisualloader
		});
		found.css('opacity',0);
		Debugger.log("startCallBack");
	},
	endCallBack: function(found){
		Debugger.log("endCallBack");
	}
	});

#### Questions

If you have any questions or issues feel free to mail me on **robbie.bardijn@gmail.com **