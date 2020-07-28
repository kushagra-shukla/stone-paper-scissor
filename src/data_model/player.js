const allMoves = require('./legal_moves.js');
module.exports = class Player{

	constructor(name){
		this.name = name;
		this.move = null;
		this.wins = 0;
		this.loses = 0;
		this.draws = 0;
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