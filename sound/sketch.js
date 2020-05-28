/*
George Facey 
sound
05/20/2020
*/

var ballSound;

function perload(){

	ballSound = loadSound("basketBall.mp3");
}

function setup(){

	createCanvas(640, 360);
}

function draw(){

	background(220);
}

function mousePressed(){

	ballSound.play();
}