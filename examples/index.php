<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>imageLoading tests</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script type='text/javascript' src="http://www.google.com/jsapi"></script><!-- google api downloader-->
	<script type="text/javascript">google.load("jquery", "1", {uncompressed:true});</script>
	<!--<script type='text/javascript' src="jquery_.js"></script>-->
	<script src="http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js"></script>
	<script type='text/javascript' src="utilFunctions.js"></script>
	<script type='text/javascript' src="../loader.jquery.js"></script><!-- preloader plugin-->
	<script type="text/javascript">
	
	$(document).ready(function() {
		
		
		function generateLoader(str){
			var cl = new CanvasLoader(str);
			cl.setColor('#ffffff'); // default is '#000000'
			cl.setDiameter(20); // default is 40
			cl.setDensity(15); // default is 40
			cl.setRange(1.2); // default is 1.3
			cl.setSpeed(1); // default is 2
			cl.setFPS(28); // default is 24
			cl.show(); // Hidden by default
			var loaderObj = document.getElementById("canvasLoader");
	  		loaderObj.style.position = "absolute";
	  		loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
	  		loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
		}

		$('#singleImage').preload("image", {
			completeCallBack :function(loaded){
				loaded.animate({opacity:1},{duration: 700,complete:function(){
					//remove canvasloader
					$("#"+loaded.attr('alt')).remove();
					}});
				Debugger.log("completeCallBack");
			},
			startCallBack :function(found){
				//Debugger.log("found => "+found);
			    var offset = found.offset();
				var top = offset.top + found.height()*.5;
				var left = offset.left + found.width()*.5;
				$('section').prepend('<div id="'+ found.attr('alt') +'" class="loader" style="position:absolute;top:'+ top +'px;left:'+ left +'px"></div>')
				generateLoader(found.attr('alt'));
			
				found.css('opacity',0);
				Debugger.log("StartpreloadImage");
			}
		});
		
		
		$('#single').preload("background-image", {
			completeCallBack :function(loaded){
				//function load(){
					loaded.animate({opacity:1},{duration: 700,complete:function(){
						//remove canvasloader
						Debugger.log("animcomplete");
						$("#"+loaded.attr('id') + "_loader").remove();
					}});
					//}
				//setTimeout(load,1000);
				Debugger.log("completeCallBack");
			},
			startCallBack :function(found){
				found.each(function(){
					//addcavasloader
				    var offset = $(this).offset();
					var top = offset.top + $(this).height()*.5;
					var left = offset.left + $(this).width()*.5;
					$('#single').prepend('<div id="'+ $(this).attr('id') +'_loader" class="loader" style="position:absolute;top:'+ top +'px;left:'+ left +'px"></div>')
					generateLoader($(this).attr('id') + "_loader");
				});
				found.css('opacity',0);
				Debugger.log("startCallBack");
			},
			endCallBack :function(found){
				Debugger.log("endCallBack");
			}
		});
	});
	</script>
</head>
<body>
	<section>
		<h3>Image Tag</h3>
		<h4>One Image</h4>
		<img src="<?php echo('imgs/pic_6.jpg');?>" id="singleImage" alt="<?php echo(pic_11);?>" style="position:relative;width:100%"/>
		<h3>Background</h3>
		<h4>One image</h4>
		<div id="single" style="background-image: url(<?php echo('imgs/pic_15.jpg');?>);width:100%;height:300px;position:relative;float:left;background-size: 100%;"></div>
	</section>
</body>
</html>