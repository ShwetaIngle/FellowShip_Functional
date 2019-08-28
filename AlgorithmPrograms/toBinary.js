const util=require('../Utility/Utility.js');

console.log("Enter the decimal number: ");
var num=util.readInput();

let Bnum=util.toBinaryConversion(parseInt(num));

console.log(Bnum);

