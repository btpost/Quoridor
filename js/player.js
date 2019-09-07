import Board from './board.js'
import Pawn from './pawn.js'

// Class to keep track of data relevant to each player

export class Player {
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
export default Player;