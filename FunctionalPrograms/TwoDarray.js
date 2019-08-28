const util=require('../Utility/Utility.js');

console.log("Enter the no of rows: ");
var rows=parseInt(util.readInput());

console.log("Enter the no of columns: ");
var columns=parseInt(util.readInput()); 

util.TwodArray(rows , columns);


