import Square from './square.js';

class Board {
	constructor(config) {
		this.squares = new Array(9);
		for (var i = 0; i < 9; i++)
		{
			var row = new Array(9);
			for(var j = 0; j < 9; j++)
			{
				row[j] = new Square({scene: config.scene, x:config.x, y:config.y
									 arr_x:j, arr_y:i});
			}
			squares[i] = row;
		}
	}

	get square(x, y) {
		return squares[y][x];
	}
}