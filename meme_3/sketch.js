 var kobe1Image;
 var kobeShot;
 var kobeJump;
 var kobeLayup;
 var kobeFree;
 var counter = 0;
   	function preload()	{
   		
   		kobe1Image = loadImage("freeThrow.jpg");
   		kobeShot = loadImage("kobe2.jpg");
   		kobeJump = loadImage("stepBack.jpg");
   		kobeLayup = loadImage("slamDunck.jpeg")
   		kobeFree = loadImage("kobe.jpg")
   	}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

//function mousePressed(){
	//counter++;
	//if (counter == 2){
		//counter = 0;
	//}

//}

function draw() {
	background('black');

	image(kobe1Image, 0, 0, width, height);


	if (mouseX > width/2 && mouseY > height/2) {
		image(kobeShot, width/2, height/2, width/2, height/2);
	}else if (mouseX < width/2 && mouseY > height/2){
		image(kobeJump, 0, height/2, width/2, height/2);
	}else if (mouseX > width/2 && mouseY < height/2){
		image(kobeLayup, width/2, 0, width/2, height/2);
	} else {
		image(kobeFree, 0, 0, width/2, height/2);
	}



	//image(kobe1Image, 0, 0, width, height);
	//image(kobeShot, 0, 0, width, height);

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

	var welcome = 'shoot for the stars';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}
