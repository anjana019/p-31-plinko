class Plinko {
	constructor(x, y, r) {
		var options = {
			isStatic: true,
		}
		this.r = 10;
		this.body = Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);

	}
	display() {

		var plinko = this.body.position;
		push()
		translate(plinko.x, plinko.y);
		rectMode(CENTER)
		fill(255, 0, 255)
		ellipseMode(RADIUS);
		ellipse(0, 0, this.r, this.r)
		pop()

	}

}