var k = 5/8;
var slider;

function setup() {
	createCanvas(400, 400);
	slider = createSlider(1,2,1,0.01);
}

function draw() {
	k = slider.value();
	background(51);
	translate(200, 200);


	beginShape();
	stroke(255);
	noFill();
	strokeWeight(1);
	for (var a = 0; a <= 10*TWO_PI; a += 0.001) {
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		vertex(x, y);
	}
	endShape();
}

