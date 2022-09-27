import Player from './../src/pigdice.js';

describe('Player', () => {
  
  test('should generate a random integer from 1 to 6 inclusive', () => {
    let rollResult = new Player(currentScore);
    expect(rollResult).toEqual("1, 2, 3, 4, 5, 6");
  });