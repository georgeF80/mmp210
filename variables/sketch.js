/*
		self potrait
    by George 
		02/06/2020
*/
var x = 300;
var y = 200;

//size variables
var s = 200;


function setup(){
	createCanvas(640, 360);	
}

function draw() {
background(0,191, 255);

	//arc(x + 100,y - 30, s - 140, s - 150,-HALF_PI, HALF_PI);
    //arc(400, 160, 20, 30,-HALF_PI, HALF_PI);
    //arc(x - 80,y - 30, s - 150, s - 140,HALF_PI, -HALF_PI)
    triangle(230, 140, 248, 20, 295, 100);
    triangle(300, 160, 365, 20, 385, 127);
    fill('#FA5882');
    triangle(300, 160, 363, 40, 380, 124);//RIGHT INNER 
    triangle(233, 140, 253, 40, 290, 100);// LEFT INNER


	strokeWeight(1);
	fill('#a6936c');
	ellipse(309, 200, 210);// headShape

//ellipse(x, y, s);

	strokeWeight(2);
	fill('#1fbf8c'); 
	ellipse(x + 50, y - 30, s - 135, s - 165); // RIGHT EYE
	ellipse(x - 30, y - 30, s - 135, s - 165); // RIGHT EYE
	fill('black');
	ellipse(x + 60, y - 30, s - 185, s - 175); //RIGHT eyes
	ellipse(x - 20, y - 30, s - 185, s - 175); //left eyes
	

	//strokeWeight(2);
 
	line(x + 20, y + 25, s + 240, s - 10);//left whisker1
    line(x + 20, y + 30 , s + 230, s + 20); // left whisker2
    line(x + 20, y + 35, s + 215, s + 40);// left whisker3
    line(x, y + 25, s, s - 10);
    line(x, y + 30, s, s + 25);
    line(x, y + 35, s, s + 45);

     strokeWeight(3);
	line(x + 10, y + 25, s + 110, s + 40);//middle line for mouth  
	line(x - 10, y + 45, s + 110, s + 40);//right line for the mouth 
	line(x + 35, y + 45, s + 110, s + 40);// left ling for the mouth 
    
<<<<<<< HEAD
    //fill('white');
    //strokeWeight(1);
=======
   // fill('white');
   // strokeWeight(1);
>>>>>>> 8459541b95233871bd23e3de607c1a8c3ae90dc9
	//ellipse(x - 45, y + 130, s - 100, s - 140); // pow
	//ellipse(x + 65, y + 130, s - 100, s - 140); // pow two



    //arc(x + 100,y - 100, 30, 20, 0,-HALF_PI, HALF_PI);
    //arc(x, y - 40, 20, 30,-HALF_PI, HALF_PI);
    
    


    fill('#b31e43');
    strokeWeight(2);
    triangle(310, 225, 270, 200, 340, 200);

       

}
