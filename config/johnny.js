var five = require('johnny-five');
var board = new five.Board();

module.exports.johnny = {
  board:board,
  five:five,
  led:null
};
