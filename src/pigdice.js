export default function Player(rollResult) {
  this.rollResult = rollResult; 
}

Player.prototype.diceRoll = function() {
  let rollResult = Math.floor(Math.random() * 6 + 1);
  // this.lastRoll = rollResult;
  return(rollResult);
};