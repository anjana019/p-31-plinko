class Particle {
	constructor(x, y, r) {
		var options = {
			isStatic: false,
			restitution: 0.3,
			friction: 0.5,
			density: 1.2


		}
		this.x = x;
		this.y = y;
		this.r = 10;
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		this.color = color(random(0, 225), random(0, 225), random(0, 225));
		World.add(world, this.body);

	}
	display() {

		var pos = this.body.position;
		var angle = this.body.angle;
		push()
		translate(pos.x, pos.y);
		rotate(angle);
		noStroke();
		fill(this.color)
		ellipseMode(RADIUS);
		ellipse(0, 0, this.r, this.r);
		pop();

	}

}