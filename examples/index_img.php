<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>imageLoading tests</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script type='text/javascript' src="http://www.google.com/jsapi"></script><!-- google api downloader -->
	<script type="text/javascript">google.load("jquery", "1", {uncompressed:true});</script>
	<!--<script type='text/javascript' src="jquery_.js"></script>-->
	<script src="http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js"></script>
	<script type='text/javascript' src="../loader.jquery.js"></script><!-- preloader plugin-->
	<script type='text/javascript' src="utilFunctions.js"></script>
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

		
		$('#ipi').preload("image", {
			completeCallBack: function(loaded){
				loaded.animate({opacity:1},{duration: 700,complete:function(){
					$("#"+loaded.attr('alt')).remove();
					}});
				Debugger.log("completeCallBack");
			},
			startCallBack: function(found){
				found.each(function(){
					//addcavasloader
				    var offset = $(this).offset();
					var top = offset.top + $(this).height()*.5;
					var left = offset.left + $(this).width()*.5;
					$('#ipi').prepend('<div id="'+ $(this).attr('alt') +'" class="loader" style="position:absolute;top:'+ top +'px;left:'+ left +'px"></div>')
					generateLoader($(this).attr('alt'));
				});
				found.css('opacity',0);
				Debugger.log("StartpreloadImage");
			},
			endCallBack: function(found){
				Debugger.log("EndpreloadImage");
			}
		});
						
						
		$('#aioc').preload({
			completeCallBack: function(loaded){
				Debugger.log("completeCallBack");
			},
			startCallBack: function(found){
				var top = found.get(2).offsetTop + found.get(2).height*.5;
				var left = found.get(2).offsetLeft+ found.get(2).width*.5;
				$('#ipi').prepend('<div id="'+ found.get(2).alt +'" class="loader" style="position:absolute;top:'+ top +'px;left:'+ left +'px"></div>')
				generateLoader(found.get(2).alt);
					
				found.css('opacity',0);
				Debugger.log("StartpreloadImage");
			},
			endCallBack: function(found){
				found.animate({opacity:1},{duration: 700});
				Debugger.log("EndpreloadImage");
			}
		});
				
		$('#singleImage').preload({
			completeCallBack: function(loaded){
				$(loaded).animate({opacity:1},{duration: 700,complete:function(){
					//remove canvasloader
					$("#"+$(loaded).attr('alt')).remove();
				}});
					
				Debugger.log("completeCallBack");
			},
			startCallBack: function(found){
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
	});
	</script>
</head>
<body>	
	<section>
		<h3>Image Tags</h3>
		<h4>Image per image</h4>
		<div id="ipi">
			<?php for($i=1;$i<6;$i++): ?>
				<img src="<?php echo('imgs/pic_'.$i.'.jpg');?>" alt="<?php echo('pic_'.$i);?>" style="position:relative;width:250px;height:156px"/>
			<?php endfor; ?>
		</div>
		<h4>All images on complete</h4>
		<div id="aioc">
			<?php for($i=7;$i<12;$i++): ?>
				<img src="<?php echo('imgs/pic_'.$i.'.jpg');?>" alt="<?php echo('pic_'.$i);?>" style="position:relative;width:250px;height:156px" />
			<?php endfor; ?>
		</div>
		<h4>One Image</h4>
		<img src="<?php echo('imgs/pic_6.jpg');?>" id="singleImage" alt="<?php echo(pic_11);?>" style="position:relative;width:100%"/>
	</section>	
</body>
</html>