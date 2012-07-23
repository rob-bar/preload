preload
=======

Jquery Plugin for preloading images and background images

	<section>
		<h3>PRELOADING USAGE</h3>
		<h4>Image tags</h4>
		<p>preloading a single image tag:</p>
		<code>$(selector).preloadImage(completeCallBack, startCallBack);</code>
		<p>preloading a group of image tags:</p>
		<code>$(group selector).preloadImage(completeCallBack, startCallBack, endCallBack);</code>
		
		<h4>Background images</h4>
		<p>preloading a single tag:</p>
		<code>$(selector).preloadBackgroundImage(completeCallBack, startCallBack);</code>
		<p>preloading a group of tags:</p>
		<code>$(group selector).preloadBackgroundImage(completeCallBack, startCallBack, endCallBack);</code>
		<p>startCallBack &amp; endCallBack are optional</p>
	</section>

examples:
http://preview.prox.to/jstests/preloading/ <br />
http://preview.prox.to/jstests/preloading/index_all.php <br />
http://preview.prox.to/jstests/preloading/index_img.php <br />
http://preview.prox.to/jstests/preloading/index_bg.php <br />