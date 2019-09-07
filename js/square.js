export class Square extends Phaser.GameObjects.Image {

	constructor(config) {
		super(config.scene, config.x, config.y, 'square');
		// Added fields for the array coordinates of the square
		this.arr_x = Math.floor(config.x/70);
		this.arr_y = Math.floor(config.y/70);
		// Add array for keeping track of which sides of the square are blocked
		this.blocked_sides = new Array(4).fill(0);

		// Add the square to the screen
		config.scene.add.existing(this);
	}
	// Methods for blocking each side of the square
	blockUp() {
		this.blocked_sides[0] = 1;
	}
	blockDown() {
		this.blocked_sides[1] = 1;
	}
	blockLeft() {
		this.blocked_sides[2] = 1;
	}
	blockRight() {
		this.blocked_sides[3] = 1;
	}

	get blockArray() {
		return this.blocked_sides;
	}

	blocked (i) {
		return this.blocked_sides[i];
	}

}

export default Square;