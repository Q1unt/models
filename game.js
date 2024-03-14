import DefaultCharcter from './domain.js';

const Defaultgame = class Game {
    start() {
      console.log('game started');
    }
  };

export default Defaultgame;
  
export class GameSavingData {
};
  
export function readGameSaving() {
};
  
export function writeGameSaving() {
};