// ==============================
// = Random between min and max =
// ==============================
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

// ==========================================
// = put dots in a value string =
// ==========================================
function stringDotify(cnt) {
    var str_cnt = cnt.toString();
    var ret_str = "";
    for (var i = str_cnt.length; i >= 0; i -= 3) {
        if (i - 3 > 0) {
            ret_str = "." + str_cnt.slice(i - 3, i) + ret_str;
        } else {
            ret_str = str_cnt.slice(0, i) + ret_str;
        }
    }
    return ret_str;
}

// =====================================
// = Unique Random between min and max =
// =====================================
function randomFromToBlackListed(from, to, blacklist) {
    var rnd_ = Math.floor(Math.random() * (to - from + 1) + from);
    checkBlacklist(rnd_);
    function checkBlacklist(rnd) {
        rnd_ = rnd;
        for (i = 0; i < blacklist.length; i++) {
            if (rnd_ == blacklist[i]) checkBlacklist(Math.floor(Math.random() * (to - from + 1) + from));
        }
    }
    return rnd_;
}

// ============================
// = checking canvasSupport =
// ============================
function canvasSupport() {
    return Modernizr.canvas;
}
// =====================
// = Class for logging stuff =
// =====================
var Debugger = function() {};
Debugger.isTracing = true;
//strings
Debugger.log = function(message) {
    try {
        if (Debugger.isTracing) console.log(message);
    } catch(exception) {
        console.log(exception);
        return;
    }
}
//objects and arrrays
Debugger.obj = function(obj) {
    try {
        if (Debugger.isTracing) console.dir(obj);
    } catch(exception) {
        console.log(exception);
        return;
    }
}

// ========
// = Class to count the frames in a setInterval function =
// ========
function FrameRateCounter() {
    this.lastFrameCount = 0;
    dateTemp = new Date();
    this.frameLast = dateTemp.getTime();
    delete dateTemp;
    this.frameCtr = 0;
}

// ===================================
// = Function to call in setInterval =
// ===================================
FrameRateCounter.prototype.countFrames = function() {
    dateTemp = new Date();
    this.frameCtr += 1;
    if (dateTemp.getTime() >= this.frameLast + 1000) {
        Debugger.log("frame event");
        this.lastFrameCount = this.frameCtr;
        this.frameLast = dateTemp.getTime();
        this.frameCtr = 0;
    }
    delete dateTemp;
}

// ====
// = Function to calculate the distance between points =
// ====
function disatnceBetweenPoints(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    return dist;
}

// =========================================
// = Function to Convert radians to angles =
// =========================================
function radiansToAngle(ra) {
    var angle = ra * 180 / Math.PI;
    return angle;
}

// =========================================
// = Function to Convert angles to radians =
// =========================================
function angleToRadians(ang) {
    var radians = ang * Math.PI / 180;
    return radians;
}

// =========================================
// = Function to round to certain exponent =
// =========================================
function round2(_numberToRound, _exp) {
    var exp;
    if (_exp > 1) {
        exp = Math.pow(10, _exp);
    } else {
        exp = 1;
        Debugger.log("WARING!:_exp >= 1");
    }
    return Math.round(_numberToRound * exp) / exp;
}

// =================================================================
// = Function to get the millisecondsInterval based on a frameRate =
// =================================================================
function getMillisecondsInterval(frameRate, milliseconds) {
    if (milliseconds === undefined) {
        milliseconds = 1000;
    }
    return milliseconds / frameRate;
}
// ===========================================================
// = Function to quickly choose between 2 things or 1 and -1 =
// ===========================================================
function choose(firstValue, secondValue) {
    var retval;
    if (firstValue === undefined && secondValue === undefined) {
        (Math.random() < .5) ? retval = 1: retval = -1;
    } else {
        (Math.random() < .5) ? retval = firstValue: retval = secondValue;
    }
    return retval;
}

// ==================================
// = Function to check Boxcollision =
// ==================================
function boundingBoxCollide(object1, object2)
 {
    Debugger.log("boundingBoxCollide");
    var left1 = object1.x;
    var left2 = object2.x;
    var right1 = object1.x + object1.width;
    var right2 = object2.x + object2.width;
    var top1 = object1.y;
    var top2 = object2.y;
    var bottom1 = object1.y + object1.height;
    var bottom2 = object2.y + object2.height;
    if (bottom1 < top2) return (false);
    if (top1 > bottom2) return (false);
    if (right1 < left2) return (false);
    if (left1 > right2) return (false);
    return true;
}

// ===========================================================================
// = Function that checks if an array contains a certain object or primitive =
// ===========================================================================
function arrayContains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}