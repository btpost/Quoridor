import Square from './square.js'
import Board from './board.js'

export class Pawn extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y, 'pawn');
		this.arr_x = Math.floor(config.x/70);
		this.arr_y = Math.floor(config.y/70);
		this.square = config.board.get_square(this.arr_x, this.arr_y);
		this.board = config.board;

		config.scene.add.existing(this);
	}

	move (x, y) {
		var arr_x = Math.floor(x/70);
		var arr_y = Math.floor(y/70);

		
		var new_square = this.board.get_square(arr_x, arr_y);
		if(Math.abs(new_square.arr_x - this.square.arr_x) <= 1 && Math.abs(new_square.arr_y - this.square.arr_y) <= 1 && 
					Math.abs(new_square.arr_x - this.square.arr_x)+Math.abs(new_square.arr_y - this.square.arr_y) <= 1)
		{
			console.log('Checking for blocked path');
			console.log(this.square.block_array);
			
			if(new_square.y < this.square.y)
			{

				console.log(this.square.block_array);
				if(!(this.square.blocked(0)))
				{
					console.log('path not blocked (top)');
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
				console.log('blocked on top');
			}
			else if (new_square.y > this.square.y)
			{
				console.log(this.square.block_array);
				if(!(this.square.blocked(1)))
				{
					console.log('path not blocked (bottom)');
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
				console.log('blocked on bottom');
			}
			else if (new_square.x < this.square.x)
			{
				console.log(this.square.block_array);
				if(!(this.square.blocked(2)))
				{
					console.log('path not blocked (left)');
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
				console.log('blocked on left');
			}
			else if (new_square.x > this.square.x)
			{
				console.log(this.square.block_array);
				if(!(this.square.blocked(3)))
				{
					console.log('path not blocked (right)');
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
				console.log('blocked on right');
			}
			
		}

		console.log(this.arr_x, this.arr_y);
		/* Maybe this will be useful one day

		function find_direction (new_square) {
			if(new_square.y > this.square.y)
			{
				return 0;
			}
			else if (new_square.y < this.square.y)
			{
				return 1;
			}
			else if (new_square.x < this.square.x)
			{
				return 2;
			}
			else if (new_square.x > this.square.x)
			{
				return 3;
			}
		}*/
	}


}

export default Pawn;