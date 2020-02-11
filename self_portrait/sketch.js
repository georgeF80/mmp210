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

	ellipse(209, 180, 200);
	ellipse(220, 160, 20);
	ellipse(160, 160, 30, 10); //left eyes
   		
   	rectMode(CENTER); // center the mouth 
   	strokeWeight(2);
   	fill('blue');
	rect(200, 220, 100, 20, 10);
	rect(200, 220, 90, 9, 10);


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
