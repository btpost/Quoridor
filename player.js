import Board from './board.js'
import Pawn from './pawn.js'

class Player {
	constructor(config) {
		this.board = config.board;
		this.pawn = config.pawn;
		this.wall_count = config.wall_count;
		this.cpu = config.cpu;
	}

	possible_moves() {
		//TODO: finds the possible moves the player can make 
	}
}