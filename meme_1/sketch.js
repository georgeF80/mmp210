/*
		self potrait
    by George 
		02/06/2020
*/
		
   var kobe1Image;

   	function preload()	{
   		
   		kobe1Image = loadImage("kobe.jpg");


   	}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('black');


	image(kobe1Image, 0, 0, width, height);

	textSize(100);
	fill('blue');
	stroke('pink');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Segoe UI');
	textAlign(LEFT, CENTER);

	var hello = 'kobe';
	var n = map(frameCount, 0, 400, 0, hello.length);
	text(hello.charAt(n), 0, 250);

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	var welcome = 'shoot your shot';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}
