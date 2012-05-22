preload
=======

Jquery Plugin for preloading images and background images

Image tags

preloading a single image tag:
$(selector).preloadImage(completeCallBack, startCallBack);

preloading a group of image tags:
$(group selector).preloadImage(completeCallBack, startCallBack, endCallBack);

Background images

preloading a single tag:
$(selector).preloadBackgroundImage(completeCallBack, startCallBack);

preloading a group of tags:
$(group selector).preloadBackgroundImage(completeCallBack, startCallBack, endCallBack);

startCallBack & endCallBack are optional

examples:
http://preview.prox.to/jstests/preloading/
http://preview.prox.to/jstests/preloading/index_all.php
http://preview.prox.to/jstests/preloading/index_img.php
http://preview.prox.to/jstests/preloading/index_bg.php