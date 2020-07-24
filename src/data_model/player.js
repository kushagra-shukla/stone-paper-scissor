const allMoves = require('./legal_moves.js');
module.exports = class Player{
	move = null;
	wins = 0;
	loses = 0;
	draws = 0;
	constructor(name){
		this.name = name;
	}

	set setWins(wins){
		this.wins = wins; 
	}
	set setLoses(loses){
		this.loses = loses;
	}
	set setDraws(draws){
		this.draws = draws;
	}
	get getWins(){
		return this.wins ;
	}
	get getLoses(){
		return this.loses;
	}
	get getDraws(){
		return this.draws;
	}
	get getMove(){
		// this.calculateMoveRandomly provides instance context otherwise referrence error
		this.move = this.calculateMoveRandomly();
		return this.move;
	}
	// generates integers in the range [0,allMoves.length-1]
	// Math.floor() is faster than parseInt() obviously 
	calculateMoveRandomly(){
		return allMoves[Math.floor(Math.random()*allMoves.length)];
	}
};