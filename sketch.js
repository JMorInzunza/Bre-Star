var p1 = {x: 0, y:0};
var p2 = {x: this.innerWidth, y: this.innerHeight};

var p3 = {x: (this.innerWidth/2), y: 0};
var p4 = {x: (this.innerWidth/2), y: this.innerHeight};

var p5 = {x: 0, y: (this.innerHeight/2)};
var p6 = {x: this.innerWidth, y: (this.innerHeight/2)};

var p7 = {x: this.innerWidth, y: 0};
var p8 = {x: 0, y: this.innerHeight};

function setup() 
{
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	bresenham(p1, p2);
	bresenham(p3, p4);
	bresenham(p5, p6);
	bresenham(p7, p8);
	noLoop();

}function bresenham(a, b)
{
	let sy , sx;
	let x, y, p;
	let aux, aux1;
	let dx = b.x - a.x;
	let dy = b.y - a.y;

	if(dy < 0) 
	{
		dy = -dy;
		sy = -1;
	}
	else
	{
		sy = 1;
	}

	if(dx < 0) 
	{
		dx = -dx;
		sx = -1;
	}
	else
	{
		sx = 1;
	}

	x = a.x;
	y = a.y;
	
	point(x,y)

	if(dx > dy) 
	{
		p = 2 * dy - dx;
		aux = 2 * dy;
		aux1 = 2 * (dy - dx);

		while(x != b.x) 
		{
			x += sx;

			if(p < 0) 
			{
				p += aux;
			}
			else 
			{
				y += sy;
				p += aux1;
			}
			point(x,y);
		}
	}
	else
	{
		p = 2 * dx - dy;
		aux = 2 * dx;
		aux1 = 2 * (dx - dy);

		while(y != b.y) 
		{
			y += sy;

			if(p < 0) 
			{
				p += aux;
			}
			else 
			{
				x += sx;
				p += aux1;
			}
			point(x,y);
		}
	}
}