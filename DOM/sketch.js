/*
George Facey
4/28/2O2O
DOM Example 
*/

	var angleSlider;
	var nameInput;

function setup(){
	createCanvas(640, 360);
	noStroke();
	

	nameInput = createInput("Type your name");
	
	angleSlider = createSlider(0, TWO_PI, 0, PI * 0.01);
	angleSlider.input(pattern);

	var patternButton= createButton("New Pattern");
	patternButton.mousePressed(pattern);

	var saveButton= createButton("Save Image");
	saveButton.mousePressed(saveImage);	

	pattern();

}

function saveImage() {
save("patternImage.png");

}


function pattern(){
	background('lightblue');

	for (let x = 0; x <= width + 100; x += 100) {
		
		push();
		translate(x, height/2);
		
		rotate(angleSlider.value());
		
		fill(255, 204, 0);

		rect(0, 0, random(100, 200), random(100, 200));
		pop();
	}

textAlign(CENTER, CENTER);
textSize(100);
fill('plum');
stroke(255, 204, 0);
strokeWeight(10);
text(nameInput.value(),width/2 , height/2);

}