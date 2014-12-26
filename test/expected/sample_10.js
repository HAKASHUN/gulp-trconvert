(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 320,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_a.png", id:"_a"},
		{src:"images/_b.png", id:"_b"},
		{src:"images/_c.png", id:"_c"}
	]
};



// symbols:



(lib._a = function() {
	this.initialize(img._a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib._b = function() {
	this.initialize(img._b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib._c = function() {
	this.initialize(img._c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.tween9 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._a();
	this.instance.setTransform(-42,-42,0.656,0.656);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.tween8 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._b();
	this.instance.setTransform(-28.5,-28.5,0.445,0.445);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.tween7 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._c();
	this.instance.setTransform(-22.5,-22.5,0.18,0.18);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.tween6 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._a();
	this.instance.setTransform(-42,-42,0.656,0.656);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.tween5 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._a();
	this.instance.setTransform(-42,-42,0.656,0.656);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.tween4 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._b();
	this.instance.setTransform(-28.5,-28.5,0.445,0.445);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.tween3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._b();
	this.instance.setTransform(-28.5,-28.5,0.445,0.445);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.tween2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._c();
	this.instance.setTransform(-22.5,-22.5,0.18,0.18);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.tween1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._c();
	this.instance.setTransform(-22.5,-22.5,0.18,0.18);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.instance = new lib.tween1("synched",0);
	this.instance.setTransform(80.5,113.5);

	this.instance_1 = new lib.tween2("synched",0);
	this.instance_1.setTransform(95.5,103.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.tween7("synched",0);
	this.instance_2.setTransform(80.5,113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_2}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:95.5,y:103.5},12).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},12).to({_off:true,x:80.5,y:113.5},12).wait(1));

	// レイヤー 2
	this.instance_3 = new lib.tween3("synched",0);
	this.instance_3.setTransform(131.5,55);

	this.instance_4 = new lib.tween4("synched",0);
	this.instance_4.setTransform(131.5,40);
	this.instance_4._off = true;

	this.instance_5 = new lib.tween8("synched",0);
	this.instance_5.setTransform(131.5,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,y:40},12).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},12).to({_off:true,y:55},12).wait(1));

	// レイヤー 1
	this.instance_6 = new lib.tween5("synched",0);
	this.instance_6.setTransform(44,49);

	this.instance_7 = new lib.tween6("synched",0);
	this.instance_7.setTransform(44,64);
	this.instance_7._off = true;

	this.instance_8 = new lib.tween9("synched",0);
	this.instance_8.setTransform(44,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},12).to({state:[{t:this.instance_8}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,y:64},12).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},12).to({_off:true,y:49},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,7,158,129);


// stage content:



(lib.sample = function() {
	this.initialize();

	// main
	this.instance = new lib.main();
	this.instance.setTransform(61.5,66,1,1,0,0,0,64,64);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As/M/IAA5/IZ/AAIAAZ/g");
	this.shape.setTransform(80,80);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(79.5,80,160.5,160);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;