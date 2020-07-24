const players = require('./src/game_logic/init_game.js');
const score = require('./src/data_model/scoreboard.js');
const stonePaperScissor = require('./src/game_logic/play_game.js');

const simulationCount = 5;

for(let i=0;i<simulationCount;i++){
	console.log(`\t\t\t\t\tITERATION #${i+1}:\t\t\t\t\t`);
	stonePaperScissor.playGame(players,score);
}