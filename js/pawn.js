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

		console.log(arr_x, arr_y);
		var new_square = this.board.get_square(arr_x, arr_y);
		if(Math.abs(new_square.arr_x - this.square.arr_x) <= 1 && Math.abs(new_square.arr_y - this.square.arr_y) <= 1 && 
					Math.abs(new_square.arr_x - this.square.arr_x)+Math.abs(new_square.arr_y - this.square.arr_y) <= 1)
		{
			console.log('within 1 space');
			if(new_square.y > this.square.y)
			{
				if(!(this.square.blocked(0)))
				{
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}
			else if (new_square.y < this.square.y)
			{
				if(!(this.square.blocked(1)))
				{
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}
			else if (new_square.x < this.square.x)
			{
				if(!(this.square.blocked(2)))
				{
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
			}
			else if (new_square.x > this.square.x)
			{
				if(!(this.square.blocked(3)))
				{
					this.square = new_square;
					this.arr_x = new_square.arr_x;
					this.arr_y = new_square.arr_y;
					this.x = new_square.x;
					this.y = new_square.y;
					return true;
				}
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