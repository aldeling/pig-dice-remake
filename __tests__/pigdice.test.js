import Player from './../src/pigdice.js';

describe('Player', () => {
  
  test('should generate a random integer from 1 to 6 inclusive', () => {
    let player = new Player(Math.floor(Math.random() * 6 + 1));
    const resultArr = [1,2,3,4,5,6];
    expect(resultArr.includes(player.rollResult)).toEqual(true);
  });
});