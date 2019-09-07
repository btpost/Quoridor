import Square from './square.js'
import Board from './board.js'

class Pawn extends Phaser.GameObjects.sprite {
	constructor(config) {
		super(config.scene, config.x, config.y, 'pawn');
		this.arr_x = convert_to_board_coords(config.x);
		this.arr_y = convert_to_board_coords(config.y);
		this.square = config.board.square(config.arr_x, config.arr_y);
	}

	convert_to_board_coords(val)
	{
		return Math.floor(val/70);
	}

	move (x, y) {
		var arr_x = convert_to_board_coords(x);
		var arr_y = convert_to_board_coords(y);

		// TODO: Check if the argument coordinates are a valid move		
	}
}