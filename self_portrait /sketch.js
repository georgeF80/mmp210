/*
		self potrait
    by George 
		02/06/2020
*/
var x = 300;
var y = 200;
var s = 200;
var b = 1;

function setup(){
	createCanvas(640, 360);	
}

function draw() {
background(0,191, 255);

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
    

    


    fill('#b31e43');
    strokeWeight(2);
    triangle(310, 225, 270, 200, 340, 200);

       

}
