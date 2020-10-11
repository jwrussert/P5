// Things I learned:
// The array.push() function pushes by reference. So changes to the initial data will affect the data pushed to the array.

let head;
let xv;
let yv;
let box_size;
let tail;
let tail_length;
let food;
let w;
let h;


function setup() {
	frameRate(20);
	w = 800;
	h = 800;
	head = createVector(400,200);
	xv = 0;
	yv = 0;
	box_size = 10;
	tail = [];
	tail_length = 1;
	food = createVector(0,0);

	createCanvas(w, h);
	background('rgba(0,255,0, 1)');
	strokeWeight(4);
	stroke(51);
	rect(head.x,head.y, box_size,box_size);
	for(ii = 0; ii< tail_length; ii++){
		tail.push(head.copy());
	}

	
}

function draw() {
	// Check the last key pushed
	switch(keyCode) {
		case UP_ARROW:
			xv = 0;
			yv = -1;
			break;
		case DOWN_ARROW:
			xv = 0;
			yv = 1;
			break;
		case RIGHT_ARROW:
			xv = 1;
			yv = 0;
			break;
		case LEFT_ARROW:
			xv = -1;
			yv = 0;
			break;
		default:
			break;
	}

	// Change the location of the head base on the "velocity"	
	head.x = head.x + xv*box_size;
	head.y = head.y + yv*box_size;
	// Push the location of the head to the tail array.
	// Must use copy here, because "push" will push the value by reference not value. So changing the value of head
	// later will change all the values in the array unless I do this.
	tail.push(head.copy());
	

	// Check if the head has gone past the bounds.
	if(head.x>= w-box_size){
		head.x = 0;
	}else if(head.x< 0){
		head.x = w-box_size;
	}

	if(head.y >= h-box_size){
		head.y = 0;
	}else if(head.y < 0){
		head.y = h-box_size;
	}
	
	
	
	// Draw the snake and background
	background('rgba(0,255,0, 0.25)');
	strokeWeight(4);
	stroke(51);
	
	for( ii = tail.length-1; ii >=0; ii--){
		rect(tail[ii].x, tail[ii].y, box_size, box_size);
		
	}

	// Draw the food
	rect(food.x, food.y, box_size, box_size);

	// Check if the snake ate teh food
	if(head.x == food.x && head.y == food.y){
		// If the snake ate the food. Create a new food somewhere else.
		food.x = box_size*round(random((w/box_size)-2));
		food.y = box_size*round(random((h/box_size)-2));
	}else{
		// If the snake did not eat food, then it does not get longer.
		// So shift the tail array to remove one segment. This seems like a
		// backwards way to do it, but it works fine.
		tail.shift();
	}

	// Check if the head runs into any segnent of the tail.
	for( ii = 0; ii < tail.length-1; ii ++){
		if(tail[ii].equals(tail[tail.length-1])){
			// if it does run into the tail, then start the snake over at (200,200) with length 1.
			head = createVector(200,200);
			tail = [head.copy];
			
		}
	}
}