import Table from 'cli-table';
import GameRules from './GameRules.js';

export default class GameTable {
   constructor(moves) {
      this.moves = moves;
      this.gameRules = new GameRules(this.moves);
   }

   #createCliTable(head) {
      return new Table({
         head,
      });
   }

   printTable() {
      const table = this.#createCliTable([
         'v Computer \\ User >',
         ...this.moves,
      ]);

      for (let i = 0; i < this.moves.length; i++) {
         const results = [];

         for (let j = 0; j < this.moves.length; j++) {
            const gameResult = this.gameRules.getWinner(j, i);
            results.push(
               gameResult === 'user'
                  ? 'Win'
                  : gameResult === 'computer'
                  ? 'lose'
                  : 'draw'
            );
         }

         table.push([this.moves[i], ...results]);
      }

      console.log(table.toString());
   }
}
