// const score = require('./scoreboard.js');
// cannot require new score as it will be a new instance and hence useless
// passing the player score via function call from play_game.js

const boardBanner = (board) => {
	console.log("****************************************************************************************************");
	console.log(`***\t\t\t\t\t\t${board.toUpperCase()} BOARD\t\t\t\t\t***`);
	console.log("****************************************************************************************************");
};

const  hundredUnderscore = () => {
	console.log("____________________________________________________________________________________________________");
};

const topHeaders = () => {
	console.log("|Totals\t\t|\t\t|\t\t\t\tAgainst\t\t\t\t|");
	hundredUnderscore();
	console.log("|\t\t|\t\t|\tplayer1\t|\tplayer2\t|\tplayer3\t|\tplayer4\t|");
};

const generateBoard = (sheet, board) => {
	boardBanner(board);
	hundredUnderscore();
	topHeaders();
	process.stdout.write("\n");	
	process.stdout.write(`|Player ${board.charAt(0).toUpperCase()+board.slice(1)+'s'}\t|\t`);
	for(let i=0; i<Object.keys(sheet).length; i++){
		// toString() is slower than this hacky way
		let playerOne = 'player'+(i+1);		
		process.stdout.write(`${playerOne}\t|\t`);
		for(let j=0; j<Object.keys(sheet).length; j++){

			let playerOther = 'player'+(j+1);

			if(sheet[playerOne].hasOwnProperty(playerOther)){

				process.stdout.write(`${sheet[playerOne][playerOther]}\t|\t`);

			}
			else if(i === j){
				process.stdout.write("-\t|\t");
			}
			else{
				process.stdout.write("0\t|\t");
			}
		}
		process.stdout.write("\n");
		if( (i+1) != Object.keys(sheet).length){
			process.stdout.write("|\t\t|\t");
		}
	}
	process.stdout.write("\n");
	hundredUnderscore();
	process.stdout.write("\n\n");
};

exports.playerHand = (players) => {
	hundredUnderscore();
	console.log("|\tplayer1\t|\tplayer2\t|\tplayer3\t|\tplayer4\t|");
	process.stdout.write("\n");
	process.stdout.write("|\t");
	for(let key of Object.keys(players)){
		process.stdout.write(`${players[key].move}\t|\t`);
	}
	process.stdout.write("\n");
	hundredUnderscore();
	process.stdout.write("\n");
};

exports.scoreBoard = (score, board) => {
	let sheet;
	if(board === 'win'){
		sheet = score.winTally;
	}
	else if(board === 'lose'){
		sheet = score.loseTally;
	}
	else if(board === 'draw'){
		sheet = score.drawTally;
	}
	generateBoard(sheet,board);
};