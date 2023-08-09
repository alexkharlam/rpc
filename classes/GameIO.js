import inquirer from 'inquirer';
import Validator from './Validator.js';

export default class GameIO {
   constructor(moves) {
      this.moves = moves;
      this.validator = new Validator(this.moves);
   }

   async getUserMove() {
      const movePrompt = [
         {
            type: 'input',
            name: 'move',
            message: 'Enter your move:',
            validate: (input) => {
               if (input === '?' || input === '0') return true;
               if (!this.validator.isMoveIndexValid(input - 1)) {
                  return 'Please enter correct number of existing move';
               }
               return true;
            },
         },
      ];

      const answer = await inquirer.prompt(movePrompt);
      return answer.move;
   }

   async playAgain() {
      const { again } = await inquirer.prompt([
         {
            type: 'confirm',
            name: 'again',
            message: 'Do you want to play again?',
         },
      ]);
      return again;
   }
}
