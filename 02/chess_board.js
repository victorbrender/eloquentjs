// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// First implementation
// var board = '';
// for (var i = 0; i < 8; i++) {
//   if (i % 2 == 0) board += ' # # # #\n';
//   if (i % 2 == 1) board += '# # # # \n';
// }
// console.log(board);

// Second implementation
// var boardSize = 18;

// var line = ''
// for (var i = 0; i < boardSize; i++) {
//   if (i % 2 == 0 )
//     line += ' '
//   else
//     line += '#'
// }

// var board = '';
// for (var j = 0; j < boardSize; j++) {
//   if (j % 2 == 0)
//     board += line + '\n';
//   else
//     board += line.split("").reverse().join("") + '\n';
// }

// console.log(board);

// Third implementation
var size = 100;
var board ='';

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    board += ( (i+j) % 2 == 0 ? ' ' : '#' );
  }
  board += '\n';
}

console.log(board);