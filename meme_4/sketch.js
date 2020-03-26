/*
	GEORGE FACEY
 	MEME VERSION 4
	3/19/2020
*/
var kobeImage;
var s = 1; // scale for kobe image.
var speed = 0.01;
function preload(){
	kobeImage = loadImage("kobe.jpg");
}

function setup(){
	createCanvas(500, 300);
}
function draw() {
	background(0);

	// kobe bryant text styles 
	textSize(30);
	textFont('Trade Winds');
	textAlign(CENTER, CENTER);
	fill('plum');

	translate(width/2, height/2);
	
	push();
	scale(s);
	s += speed;


	imageMode(CENTER);
	image(kobeImage, 0, 0, 600);

	if (s > 2 || s < 1){
		speed *= -1;
	}

	pop();

	//calculate rotation angle 
	var g = frameCount * PI / 170;
	shearX(g);

	//	push();
	//	shearY(g);

	text("KOBE BRYANT", 0, 0); 


	//	shearX(g);
	//	text("KOBE BRYANT", 0, 0);

}
