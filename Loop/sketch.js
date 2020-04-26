/*
George Facey 
3/31/2020
*/

//loop repeats 
//for(let i = 0; i < 5; i++){
//	console.log ('i', i);
//}

function setup() {
	createCanvas(640, 360);

	noStroke();
}
function draw(){
	background('purple');

	for (let x = 0; x <= width; x += 200){
		
		
		

		fill('pink');
		ellipse(x, 240, 20);

		ellipse(x + 30, 240 + 30, 20);
		ellipse(x - 30, 240 - 30, 20);
		ellipse(x - 30, 240, 20);
		ellipse(x + 30, 240, 20);

	}

	
}