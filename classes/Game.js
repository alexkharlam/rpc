import GameRules from './GameRules.js';
import KeyGenerator from './KeyGenerator.js';
import GameIO from './GameIO.js';
import Logger from './Logger.js';
import Validator from './Validator.js';
import GameTable from './GameTable.js';

const logger = new Logger();
const keyGenerator = new KeyGenerator();
const gameRules = new GameRules(process.argv.slice(2));
const validator = new Validator(gameRules.moves);
const gameIO = new GameIO(gameRules.moves);
const gameTable = new GameTable(gameRules.moves);

export default class Game {
   #quitGame() {
      logger.logText('Thank you for playing! Shutting down...');
      process.exit(0);
   }

   async #printGameResults(userMoveIdx, computerMoveIdx) {
      logger
         .logText(`Your move: ${gameRules.moves[userMoveIdx]}`)
         .logText(`Computer move: ${gameRules.moves[computerMoveIdx]}`);

      const winner = gameRules.getWinner(+userMoveIdx, computerMoveIdx);

      logger.logColoredBg(
         winner === 'user'
            ? 'You win!'
            : winner === 'computer'
            ? 'Computer wins'
            : 'Draw'
      );

      logger.logColoredText(`HMAC key: ${this.key}`);
   }

   async #playRound() {
      this.key = keyGenerator.generateKey();
      const computerMoveIdx = Math.floor(
         Math.random() * gameRules.moves.length
      );
      const hmac = keyGenerator.createHMAC(
         this.key,
         gameRules.moves[computerMoveIdx]
      );

      logger
         .logDivider()
         .logColoredText(`HMAC: ${hmac}`)
         .logOrderedList(gameRules.moves, 'Available moves:')
         .logText('? - help\n0 - quit game');

      let userAnswer = await gameIO.getUserMove();
      if (userAnswer === '?') return gameTable.printTable();

      if (userAnswer === '0') this.#quitGame();

      this.#printGameResults(userAnswer - 1, computerMoveIdx);
   }

   async startGame() {
      validator.validateMoves();
      let playNextRound = true;
      while (playNextRound) {
         await this.#playRound();
         playNextRound = await gameIO.playAgain();
      }
      logger.logColoredText('Thank you for playing!');
   }
}
