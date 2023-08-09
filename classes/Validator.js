import Logger from './Logger.js';
const logger = new Logger();

export default class Validator {
   constructor(moves) {
      this.moves = moves;
   }

   isMoveIndexValid(moveIndex) {
      return moveIndex >= 0 && moveIndex < this.moves.length;
   }

   validateMoves() {
      let errorMessage = null;

      if (this.moves.length % 2 === 0)
         errorMessage = 'an odd number of possible moves';

      if (this.moves.length < 3) errorMessage = 'minimum 3 possible moves';

      if (new Set(this.moves).size !== this.moves.length)
         errorMessage = 'unique values for each possible move';

      if (errorMessage) {
         logger.logWarningBg(`\nError! Please provide ${errorMessage}`);
         logger.logWarningText('\nExample: rock paper scissors');
         process.exit(1);
      }
   }
}
