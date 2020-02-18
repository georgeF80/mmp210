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

	strokeWeight(1);
	fill('#a6936c');
	ellipse(309, 200, 210);// headShape

	strokeWeight(2);
	fill('#1fbf8c'); 
	ellipse(350, 170, 65, 35); // RIGHT EYE
	ellipse(270, 170, 65, 35); // RIGHT EYE
	fill('black');
	ellipse(360, 170, 15, 25); //RIGHT eyes
	ellipse(280, 170, 15, 25); //left eyes
	
	//strokeWeight(2);
 
	line(320, 225, 420, 190);//left whisker1
    line(320, 230, 430, 220); // left whisker2
    line(320, 235, 415, 245);// left whisker3
    line(300, 225, 190, 190);
    line(300, 230, 200, 225);
    line(300, 235, 200, 245);

     strokeWeight(3);
	line(310,225, 310, 240);//middle line for mouth  
	line(290,245, 310, 240);//right line for the mouth 
	line(335,245, 310, 240);// left ling for the mouth 
    
    fill('white');
    strokeWeight(1);
	ellipse(265, 330, 100, 60); // pow
	ellipse(365, 330, 100, 60); // pow two
  	//strokeWeight(2);
 //   	fill('blue');
	// rect(200, 220, 100, 20, 10);
	// rect(200, 220, 90, 9, 10);


    //arc(400,100, 100, 50, 0,-HALF_PI, HALF_PI);
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

        fill('#b31e43');
        strokeWeight(2);
        triangle(310, 225, 270, 200, 340, 200);

        //triangle(180, 190, 190, 160, 200, 190);

}
