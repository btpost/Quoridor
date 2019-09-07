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
}
export default Board;