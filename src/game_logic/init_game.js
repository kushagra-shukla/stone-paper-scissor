const Player = require('../data_model/player.js');
/*

General Logic 

Initialize game state
draw player hand
calculate wins/losses
display score
repeate

*/

const player1 = new Player('Akshita');
const player2 = new Player('Kush');
const player3 = new Player('Omen');
const player4 = new Player('Raze');

// console.log(`${player1.name}	${player1.move}		${player1.wins}		${player1.losses}		${player1.draws}`);

// console.log(`${player2.name}	${player2.move}		${player2.wins}		${player2.losses}		${player2.draws}`);

// console.log(`${player3.name}	${player3.move}		${player3.wins}		${player3.losses}		${player3.draws}`);

// console.log(`${player4.name}	${player4.move}		${player4.wins}		${player4.losses}		${player4.draws}`);

let allPlayers = {
	'player1': player1,
	'player2': player2,
	'player3': player3,
	'player4': player4
};
//console.log(allPlayers);

module.exports = allPlayers;