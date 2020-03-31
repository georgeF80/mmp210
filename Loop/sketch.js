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

	for (let x = 0; x <= width; x += 100){
		
		let s = x/2;

		fill('orange');
		ellipse(x, 240, s/2);

		fill('pink');
		ellipse(x + 20, 237, s/4);

		ellipse(x - 10, 233, s/5);

		rect(x - 20, 260, s/3, s/9, s/19);




	}

	
}