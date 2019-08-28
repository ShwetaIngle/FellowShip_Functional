const util = require ('../Utility/Utility.js');

console.log("Enter the row number: ");
let row = parseInt(util.readInput());

console.log("Enter the column number: ");
let col = parseInt(util.readInput());

let str = util.ticTacToe(row , col);
console.log(str);
