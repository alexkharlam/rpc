export default class GameRules {
   constructor(moves) {
      this.moves = moves;
   }

   #getHalfNextElements(startIdx, endIdx) {
      if (startIdx < endIdx) {
         return this.moves.slice(startIdx, endIdx);
      } else {
         return this.moves.slice(startIdx).concat(this.moves.slice(0, endIdx));
      }
   }

   getWinner(userMoveIdx, computerMoveIdx) {
      if (userMoveIdx === computerMoveIdx) return 'draw';

      const totalMoves = this.moves.length;
      const halfMoves = (totalMoves - 1) / 2;

      const startIdx = (userMoveIdx + 1) % totalMoves;
      const endIdx = (startIdx + halfMoves) % totalMoves;

      const halfNextElements = this.#getHalfNextElements(startIdx, endIdx);

      if (halfNextElements.includes(this.moves[computerMoveIdx])) return 'user';
      else return 'computer';
   }
}
