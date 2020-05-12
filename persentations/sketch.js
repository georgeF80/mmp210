/* 
George Facey
MMP210
Final project
5/12/2020
*/
var currentSlide = 0;

var numberOfSlides = 3;

var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

function setup(){
	createCanvas(960, 720);
}

function draw(){
	background(200);

	var title;

	if (currentSlide == 0) {
		title = "My final project";
		decription = "Animated Logos"
	} else if (currentSlide == 1 ) {
		title = "User interaction";
		decription =  "An mouse Is pressed interaction with a photo background"
	} else if (currentSlide == 2 ) {
		title = "Graphics";
		decription = "posistion interaction" 
	}

	textSize(100);
	fill(255);
	noStroke();
	textAlign(CENTER, CENTER);
	text(title, width/2, 100);

	
	
	fill ('green');
	stroke(255);
	strokeWeight(2);
	
	rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5);
	rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5);
 
	fill(255);
	textSize(25);
	noStroke();
	textAlign(CENTER, CENTER);
	
	if (currentSlide < numberOfSlides - 1){
			text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	}
	if (currentSlide > 0){
		text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
	}

}

function mousePressed(){

	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH){
		if (currentSlide < numberOfSlides - 1){
			currentSlide++;
		}
		
	}

	if(mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
	   mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH){
		if (currentSlide > 0){
			currentSlide--;
		}
	}
}


