<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>imageLoading tests</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script type='text/javascript' src="http://www.google.com/jsapi"></script> <!--google api downloader-->
	<script type="text/javascript">google.load("jquery", "1", {uncompressed:true});</script>
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

		$('#testBackground').preload({
			completeCallBack: function(loaded){
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
			startCallBack: function(found){
				found.each(function(){
					//addcavasloader
				    var offset = $(this).offset();
					var top = offset.top + $(this).height()*.5;
					var left = offset.left + $(this).width()*.5;
					$('#testBackground').prepend('<div id="'+ $(this).attr('id') +'_loader" class="loader" style="position:absolute;top:'+ top +'px;left:'+ left +'px"></div>')
					generateLoader($(this).attr('id') + "_loader");
				});
				found.css('opacity',0);
				Debugger.log("startCallBack");
			},
			endCallBack: function(found){
				Debugger.log("endCallBack");
				loadNext();
			}
		});
		
		function loadNext(){
			$('#single').preload({
				completeCallBack: function(loaded){
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
				startCallBack: function(found){
					found.each(function(){
						//addcavasloader
					    var offset = $(this).offset();
						var top = offset.top + $(this).height()*.5;
						var left = offset.left + $(this).width()*.5;
						$('#testBackground').prepend('<div id="'+ $(this).attr('id') +'_loader" class="loader" style="position:absolute;top:'+ top +'px;left:'+ left +'px"></div>')
						generateLoader($(this).attr('id') + "_loader");
					});
					found.css('opacity',0);
					Debugger.log("startCallBack");
				},
				endCallBack: function(found){
					Debugger.log("endCallBack");
				}
			});
		}
	});
	</script>
</head>
<body>
	<section>
		<h3>Background Images</h3>
		<h4>Image per image</h4>
			<div id="testBackground">
			<?php for($i=1;$i<6;$i+=2): ?>
				<section>
					<div id="<?php echo($i);?>" style="background-image: url('<?php echo('imgs/pic_'.$i.'.jpg');?>');width:250px;height:156px;position:relative;float:left;background-size: 100%;margin:3px;"></div>
				</section>
				<div id="<?php echo($i + 1);?>" style="background-image: url(<?php echo('imgs/pic_'.($i+1).'.jpg');?>);width:250px;height:156px;position:relative;float:left;background-size: 100%;margin:3px;"></div>
			<?php endfor; ?>
			</div>
		<h4>One image</h4>
		<div id="single" style="background-image: url(<?php echo('imgs/pic_15.jpg');?>);width:100%;height:300px;position:relative;float:left;background-size: 100%;"></div>
	</section>	
</body>
</html>