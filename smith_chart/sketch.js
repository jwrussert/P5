function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	
	res_circles(width/2, height/2, -500, color(0,0,255));
	res_circles(width/2, height/2, 500, color(255, 0, 0));

	reactance_arcs( width/2, height/2, 500, color(0, 255, 0))
	strokeWeight(10);
	stroke(0);
	point(width/2, height/2);
}


function res_circles(center_x, center_y, diameter, line_color){
	 n= 10; // draw ten circles
	increment = diameter / n;
	
	noFill();
	strokeWeight(1);
	stroke(line_color);
	
	for(let d = increment; abs(d) <= abs(diameter); d += increment){
		ellipse( center_x + (diameter/2) - (d/2), center_y, abs(d), abs(d));
	}
}

function reactance_arcs(center_x, center_y, diameter, line_color){
	n= 10; // draw ten arcs
	increment = diameter / n;

	noFill();
	strokeWeight(1);
	stroke(line_color);
	line(center_x - diameter/2, center_y, center_x + diameter/2, center_y);
	for( let d = increment; abs(d) <= 20*abs(diameter); d *= 1.5){
		arc(center_x + diameter/2, center_y - d/2, d, d, HALF_PI,  -2*atan(d/(diameter)) -  HALF_PI);
	}
}