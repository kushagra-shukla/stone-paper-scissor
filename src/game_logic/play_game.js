const display = require('../display/display.js');
const legalMoves = require('../data_model/legal_moves.js');

exports.playGame = (players,score) => {
	drawHand(players);
	display.playerHand(players);
	// for each player plays against each other player only once
	let playedAgainstAllPlayers = new Set();

	for (let i of Object.keys(players)){
		
		let currentPlayerHand = players[i].move;

		for(let j of Object.keys(players)){

			if(i === j || playedAgainstAllPlayers.has(j)){
				// player can't play against self
				// player cannot play twice
				continue;
			}

			let opponentPlayerHand = players[j].move;
			
			// error check
			if(findIndex(currentPlayerHand) === -1 || findIndex(opponentPlayerHand) === -1){
				console.log("Invalid Move Index");
			}

			// game logic => use modulus to mimic the cyclic nature of stone-paper-scissor

			// lose => p1Index+1%3 === p2Index => p1 loses
			//console.log(`${currentPlayerHand}: ${findIndex(currentPlayerHand)}\t${opponentPlayerHand}: ${findIndex(opponentPlayerHand)}`);
			if((findIndex(currentPlayerHand)+1)%3 === findIndex(opponentPlayerHand)){
				players[i].setLoses = players[i].loses + 1;
				players[j].setWins = players[j].wins + 1;
				updateScore(i,j,'lose',score);
				//console.log("lose");
			}
			// win => p1Index+2%3 === p2Index => p1 wins
			else if((findIndex(currentPlayerHand)+2)%3 === findIndex(opponentPlayerHand)){
				players[i].setWins = players[i].wins + 1;
				players[j].setLoses = players[j].loses + 1;
				updateScore(i,j,'win',score);
				//console.log("win");
			}
			// draw
			else if(findIndex(currentPlayerHand) === findIndex(opponentPlayerHand)){
				players[i].setDraws = players[i].draws + 1;
				players[j].setDraws = players[j].draws + 1;
				updateScore(i,j,'draw',score);
				//console.log("draw");
			}

		}

		playedAgainstAllPlayers.add(i);
		//console.log(playedAgainstAllPlayers);
	}
	// win, lose, draw 
	display.scoreBoard(score,'win');
	//display.scoreBoard(score,'lose');
	//display.scoreBoard(score,'draw');
};

function findIndex(move){
	return legalMoves.indexOf(move);
}

function updateSheet(oneGuy, otherGuy, sheet){

	if(sheet[oneGuy].hasOwnProperty(otherGuy)){
		sheet[oneGuy][otherGuy] += 1;
	}
	else{
		sheet[oneGuy][otherGuy] = 1;
	}
	//console.log(sheet)
}

function updateScore(oneGuy, otherGuy, result, score){
	// why toLowerCase() ?
	// don't trust anybody not even yourself
	if(result.toLowerCase() === 'win'){
		// one guy wins
		updateSheet(oneGuy,otherGuy,score.winTally);
		// other guy loses
		updateSheet(otherGuy,oneGuy,score.loseTally);
	}
	else if(result.toLowerCase() === 'lose'){
		// one guy loses
		updateSheet(oneGuy,otherGuy,score.loseTally);
		// other guy wins
		updateSheet(otherGuy,oneGuy,score.winTally);
	}
	else if(result.toLowerCase() === 'draw'){
		// one guy draws
		updateSheet(oneGuy,otherGuy,score.drawTally);
		// other guy draws
		updateSheet(otherGuy,oneGuy,score.drawTally);
	}
	else{
		console.log(`Illegal state		${result}`);
	}
	//console.log(score);
}

function drawHand(players){
	for(let key of Object.keys(players)){
		players[key].getMove;
	}
}