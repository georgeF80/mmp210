/*
		self potrait
    by George 
		02/06/2020
*/

function setup(){
	createCanvas(640, 360);	
}

function draw() {
	background(0,191, 255); 


	fill('green');
	ellipse(309, 180, 200);// headShape

	fill('black'); 
	ellipse(355, 165, 30); // RIGHT EYE
	ellipse(265, 165, 30); // RIGHT EYE
	fill('white');
	ellipse(355, 170, 15, 15); //RIGHT eyes
	ellipse(265, 170, 15, 15); //left eyes
	
	strokeWeight(2);
	line(309,180, 509, 100);

 //   	strokeWeight(2);
 //   	fill('blue');
	// rect(200, 220, 100, 20, 10);
	// rect(200, 220, 90, 9, 10);


    //arc(300,160, 50, 40,-HALF_PI, HALF_PI);
    //arc(300, 160, 20, 30,-HALF_PI, HALF_PI);
    //arc(300,160, 50, 40,-HALF_PI, HALF_PI);
    //arc(300, 160, 20, 30,-HALF_PI, HALF_PI);
   //

        //line(150, 70, 170, 100);
    //line(160, 70, 180, 100);
    //line(170, 70, 180, 100);
   // line(160, 80, 190, 100);
    //line(180, 70, 180, 100);
    //line(180, 70, 190, 100);/// FOR THE DIFFERNET HAIR

        // fill();
        //noStroke();
       // triangle(180, 190, 200, 160, 300, 200);

        // triangle(180, 190, 190, 160, 200, 190);

}
