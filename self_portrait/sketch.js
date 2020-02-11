/*
		self potrait 
		02/06/2020
*/

function setup(){
	createCanvas(640, 360);	
}

function draw() {

	background(0, 200, 0); 

	fill('green');
	stroke( 'white');
	strokeWeight(5);


	ellipse(209, 180, 200);
	ellipse(220, 160, 20);
	ellipse(160, 160, 30, 10); //left eyes
   		
   	rectMode(CENTER);
   	strokeWeight(2);
   	fill('blue'); // center the mouth 
	rect(200, 220, 100, 20, 10);


    arc(300,160, 50, 40,-HALF_PI, HALF_PI);
    arc(300, 160, 20, 30,-HALF_PI, HALF_PI);
    //arc(300,160, 50, 40,-HALF_PI, HALF_PI);
    //arc(300, 160, 20, 30,-HALF_PI, HALF_PI);
   //

        //line(150, 70, 170, 100);
    line(160, 70, 180, 100);
    line(170, 70, 180, 100);
    //line(160, 80, 190, 100);
    line(180, 70, 180, 100);
    //line(180, 70, 190, 100);/// FOR THE DIFFERNET HAIR

        // fill();
        //noStroke();
        triangle(180, 190, 190, 160, 200, 190);

        
        

}
