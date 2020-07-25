const display = require('../display/display.js');

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
			

			// Below code needs refactoring 
			// Note: (index+1)%3 wins from index
			// (index+2)%3 loses from index	
			switch(currentPlayerHand){
				case 'Stone':

					//Win if opponent has Scissor
					if(opponentPlayerHand === 'Scissor'){
						players[i].setWins = players[i].wins + 1;
						players[j].setLoses = players[j].loses + 1;
						updateScore(i,j,'win',score);
					}
					// Lose
					else if(opponentPlayerHand === 'Paper'){
						players[i].setLoses = players[i].loses + 1;
						players[j].setWins = players[j].wins + 1;
						updateScore(i,j,'lose',score);
					}
					// Draw
					else if(opponentPlayerHand === 'Stone'){
						players[i].setDraws = players[i].draws + 1;
						players[j].setDraws = players[j].draws + 1;
						updateScore(i,j,'draw',score);
					}
					else{
						console.log(`Illegal Move by other guy 		${opponentPlayerHand}`);
					}
					break;

				case 'Paper':

					//Win if opponent has Scissor
					if(opponentPlayerHand === 'Stone'){
						players[i].setWins = players[i].wins + 1;
						players[j].setLoses = players[j].loses + 1;
						updateScore(i,j,'win',score);
					}
					// Lose
					else if(opponentPlayerHand === 'Scissor'){
						players[i].setLoses = players[i].loses + 1;
						players[j].setWins = players[j].wins + 1;
						updateScore(i,j,'lose',score);
					}
					// Draw
					else if(opponentPlayerHand === 'Paper'){
						players[i].setDraws = players[i].draws + 1;
						players[j].setDraws = players[j].draws + 1;
						updateScore(i,j,'draw',score);
					}
					else{
						console.log(`Illegal Move by other guy 		${opponentPlayerHand}`);
					}
					break;

				case 'Scissor':

					//Win if opponent has Scissor
					if(opponentPlayerHand === 'Paper'){
						players[i].setWins = players[i].wins + 1;
						players[j].setLoses = players[j].loses + 1;
						updateScore(i,j,'win',score);
					}
					// Lose
					else if(opponentPlayerHand === 'Stone'){
						players[i].setLoses = players[i].loses + 1;
						players[j].setWins = players[j].wins + 1;
						updateScore(i,j,'lose',score);
					}
					// Draw
					else if(opponentPlayerHand === 'Scissor'){
						players[i].setDraws = players[i].draws + 1;
						players[j].setDraws = players[j].draws + 1;
						updateScore(i,j,'draw',score);
					}
					else{
						console.log(`Illegal Move by other guy 		${opponentPlayerHand}`);
					}
					break;
				default:
					 console.log(`Illegal Move by one guy 		${currentPlayerHand}`);
					break;
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


function updateScore(oneGuy, otherGuy, result, score){
	if(result.toLowerCase() === 'win'){
		if(score.winTally[oneGuy].hasOwnProperty(otherGuy)){
			score.winTally[oneGuy][otherGuy] += 1;
		}
		else{
			score.winTally[oneGuy][otherGuy] = 1;
		}
		if(score.loseTally[otherGuy].hasOwnProperty(oneGuy)){
			score.loseTally[otherGuy][oneGuy] += 1;
		}
		else{
			score.loseTally[otherGuy][oneGuy] = 1;
		}
	}
	else if(result.toLowerCase() === 'lose'){
		if(score.loseTally[oneGuy].hasOwnProperty(otherGuy)){
			score.loseTally[oneGuy][otherGuy] += 1;
		}
		else{
			score.loseTally[oneGuy][otherGuy] = 1;
		}
		if(score.winTally[otherGuy].hasOwnProperty(oneGuy)){
			score.winTally[otherGuy][oneGuy] += 1;
		}
		else{
			score.winTally[otherGuy][oneGuy] = 1;
		}		
	}
	else if(result.toLowerCase() === 'draw'){
		if(score.drawTally[oneGuy].hasOwnProperty(otherGuy)){
			// draw will reflect in both players equally so no furhter checks required
			score.drawTally[oneGuy][otherGuy] += 1;
			score.drawTally[otherGuy][oneGuy] += 1;
		}
		else{
			score.drawTally[oneGuy][otherGuy] = 1;
			score.drawTally[otherGuy][oneGuy] = 1;
		}
	}
	else{
		console.log(`Illegal state		${result}`);
	}
}

function drawHand(players){
	for(let key of Object.keys(players)){
		players[key].getMove;
	}
}