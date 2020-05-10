/*
George Facey 
4/24/2020
*/

//Pattern Version 2 

var columnSlider;

function setup() {
	createCanvas(640, 360);
	noStroke();

	createP("column width");
	columnSlider = createSlider(20, 200, 100);
	columnSlider.input(pattern);

	var patternButton = createButton("New pattern");
	patternButton.mousePressed(pattern)

	var saveButton = createButton("Image save");
	saveButton.mousePressed(	saveImage);	
	
	pattern();


}
function saveImage() {
	save("pattern.jpg");

}

function mousePressed(){
	pattern();
}


function pattern(){
	background('purple');

	for (let x = 0; x <= width; x += columnSlider.value()){
		
		let r = random(255);
		let g = random(255);
		let b = random(255);

		let s = random(20, 80);
		let y = random(s/4, height - s/4 );

		fill(r, g, b);
		ellipse(x, y, s);

		ellipse(x + random(30), y, s/4 + random(5));
		ellipse(x - 30, y, s/4);
		

	}

	
}