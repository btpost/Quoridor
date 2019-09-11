// Class used to store and access data about the state of each square on the game board

export class Square extends Phaser.GameObjects.Image {

	constructor(config) {
		super(config.scene, config.x, config.y, 'square');
		// Added fields for the array coordinates of the square
		this.arr_x = Math.floor(config.x/70);
		this.arr_y = Math.floor(config.y/70);
		// Add array for keeping track of which sides of the square are blocked
		this.blocked_sides = new Array(4).fill(0);
		this.has_pawn = false;


		// Add the square to the screen
		config.scene.add.existing(this);


	}
	// Methods for blocking each side of the square
	block_up() {
		this.blocked_sides[0] = 1;
	}
	block_down() {
		this.blocked_sides[1] = 1;
	}
	block_left() {
		this.blocked_sides[2] = 1;
	}
	block_right() {
		this.blocked_sides[3] = 1;
	}

	get block_array (){
		return this.blocked_sides;
	}

	set hasPawn()

	blocked (i) {
		if(this.blocked_sides[i] == 1)
		{
			return true;
		}
		return false;
	}

}

export default Square;