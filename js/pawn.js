import Square from './square.js'
import Board from './board.js'

// Class to keep track of pawn movement

export class Pawn extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y, 'pawn');
		this.arr_x = Math.floor(config.x/70);
		this.arr_y = Math.floor(config.y/70);
		this.square = config.board.get_square(this.arr_x, this.arr_y);
		this.board = config.board;

		config.scene.add.existing(this);
	}

	// Check to see if a valid space was clicked. If so, move the pawn to the space.
	move (x, y) {
		// Convert the input coords to array coords
		var arr_x = Math.floor(x/70);
		var arr_y = Math.floor(y/70);

		// Check to see if the square clicked is 1 space up, down, left, or right.
		if(Math.abs(arr_x - this.square.arr_x) <= 1 && Math.abs(arr_y - this.square.arr_y) <= 1 && 
					Math.abs(arr_x - this.square.arr_x)+Math.abs(arr_y - this.square.arr_y) <= 1)
		{
			
			// Check to see if the current square is block in the direction of the new square
			// if it isn't blocked, set the new square to this pawn's current square

			// Checking for moving up
			if(arr_y < this.square.y)
			{
				if(!(this.square.blocked(0)))
				{
					var new_square = this.board.get_square(arr_x, arr_y);
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}
			// Checking for moving down
			else if (arr_y > this.square.y)
			{
				if(!(this.square.blocked(1)))
				{
					var new_square = this.board.get_square(arr_x, arr_y);
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}
			// Checking for moving left
			else if (arr_x < this.square.x)
			{
				if(!(this.square.blocked(2)))
				{
					var new_square = this.board.get_square(arr_x, arr_y);
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}
			// Checking for moving right
			else if (arr_x > this.square.x)
			{
				if(!(this.square.blocked(3)))
				{
					var new_square = this.board.get_square(arr_x, arr_y);
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}	
		}
	}
}

export default Pawn;