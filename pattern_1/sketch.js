/*
George Facey 
4/24/2020
*/

//Pattern Version 1 


function setup() {
	createCanvas(640, 360);
	noStroke();
	pattern();
}

function mousePressed(){
	pattern();
}


function pattern(){
	background('purple');

	for (let x = 0; x <= width; x += 100){
		
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