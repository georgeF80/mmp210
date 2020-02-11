/*
    variables 
		self potrait 
		02/11/2020
*/

function setup(){
	createCanvas(640, 360);	
}

function draw() {
	background(180) 
 var x =  180; 
 var y =  200;

	ellipse(200, 180, 200);
	ellipse(220, 160, 20);
	ellipse(160, 160, 30, 10);
   		
   	rectMode(CENTER); // center the mouth 
   	strokeWeight(2);
	rect(200, 220, 100, 20, 10);


    arc(x + 220 ,160, 50, 40,-HALF_PI, HALF_PI);
    arc(300, 160, 20, 30,-HALF_PI, HALF_PI); //

        //line(150, 70, 170, 100);
    line(160, 70, 180, 100);
    line(170, 70, 180, 100);
    line(160, 70, 190, 100);
    line(160, 70, 180, 100);
    line(160, 70, 180, 100);/// FOR THE DIFFERNET HAIR

        // fill();
        //noStroke();
        triangle(140, 200, 180, 150, 170, 120);

        
        

}
