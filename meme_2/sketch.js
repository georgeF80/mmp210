/*
		self potrait
    by George 
		02/06/2020
*/
		
   var kobe;
   var Panther;

   	function preload()	{
   		
   		kobeImage = loadImage("kobe.jpg");
   		PantherImage = loadImage("ThePanther.jpg");


   	}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
	rectMode(CENTER);
}

function draw() {
	background('black');

		//draw the image
	if (mouseIsPressed) {
		image(PantherImage, 0, 0, width, height);
	} else{
		image(kobeImage, 0, 0, width, height);
	
	}

	
	let s = 60;
	rectMode(CORNER);
	rect(0, 0, mouseX - s, height);
	rect(mouseX + s, 0, width, height);
	rect(0, 0, width, mouseY - s);
	rect(0, mouseY + s, width, height);
	



	//image(kobe, 500, 500);
	//image(Panther, 500, 500);

	textSize(100);
	fill('black');
	stroke('pink');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Segoe UI');
	textAlign(LEFT, CENTER);

	var hello = ' There Piont';
	var n = map(frameCount, 0, 400, 0, hello.length);
	text(hello.charAt(n), 0, 250);

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	var welcome = '';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}
