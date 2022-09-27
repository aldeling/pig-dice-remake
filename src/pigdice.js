export default function Player() {
  this.rollResult = 0; 
}

Player.prototype.diceRoll = function() {
  let rollResult = Math.floor(Math.random() * 6 + 1);
  //this.lastRoll = rollResult;
  return(rollResult);
};