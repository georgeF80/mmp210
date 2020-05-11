/*
	George Facey
	Nested Loop
	5/10/2020
	MMP210
*/


	function setup(){

		createCanvas(500, 500);
	}

	function draw(){

		background(200);

		var w = 101; //weight of cells
		var h = w; //height is equal the width

		for(let x = 0; x <= width; x += w) {

			for (let y = 0; y <= width; y += h){

				//rect(x, y, 100, 100);
				fill('white');
				ellipse(x + 50, y + 50, w)

				fill('blue');
				ellipse(x + 50, y + 50, w/4);// face 
			}
		}

	}