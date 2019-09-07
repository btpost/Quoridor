import Square from './square.js';

export class Board {
	constructor(config) {
		this.squares = []
		for (var i = 0; i < 9; i++)
		{
			var row = [];
			for(var j = 0; j < 9; j++)
			{
				row[j] = new Square({scene: config.scene, x: (j*70+35), y: (i*70+35)});
			}
			this.squares[i] = row;
		}
	}

	get_square(x, y) {
		return this.squares[y][x];
	}

	print_board() {
		for(var i = 0; i < 9; i++)
		{
			console.log(this.squares[i]);
		}
	}
	// Takes in x,y coords from clicking the screen
	// returns true if wall can be placed, false if it cannot be placed
	check_wall_placement(x, y, wall_mode) {
		// For each square, the top is in index 0, bottom 1, left 2, right 3

		x = Math.round(x/70)-1;
		y = Math.round(y/70)-1;

		if(x < 0 || y < 0 || x > 8 || y > 8)
		{
			return false;
		}

		var t_left = this.squares[y][x].block_array;
		var t_right = this.squares[y][x+1].block_array;
		var b_left = this.squares[y+1][x].block_array;
		var b_right = this.squares[y+1][x+1].block_array;

		console.log(t_left);

		if(wall_mode === 1)
		{
			if(t_left[3] == 1 || t_right[2] == 1 || b_left[3] == 1 || b_right[2] == 1)
			{
				return false;
			}

			if((t_left[1] == 1 && t_right[1] == 1) || (b_left[0] == 1 && b_right[0] == 1))
			{
				return false
			}

			return true;
		}
		else if (wall_mode === 2)
		{
			if((t_left[3] == 1 && b_left[3] == 1) || (t_right[2] == 1 && b_right[2]== 1 ))
			{
				return false;
			}

			if(t_left[1] == 1 || t_right[1] == 1 || b_left[0] == 1 || b_right[0] == 1)
			{
				return false
			}

			return true;
		}
	}

	// Changes the blocking values on the squares on the board
	add_wall(x, y, wall_mode) {
		x = Math.round(x/70)-1;
		y = Math.round(y/70)-1;

		var t_left = this.squares[y][x];
		var t_right = this.squares[y][x+1];
		var b_left = this.squares[y+1][x];
		var b_right = this.squares[y+1][x+1];

		if(wall_mode === 1)
		{
			t_left.block_right();
			b_left.block_right();
			t_right.block_left();
			b_right.block_left();
		}
		else if (wall_mode === 2)
		{
			t_left.block_down();
			t_right.block_down();
			b_left.block_up();
			b_right.block_up();
		}
	}
}
export default Board;