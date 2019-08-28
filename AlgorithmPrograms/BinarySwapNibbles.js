const util=require('../Utility/Utility.js');

console.log("Enter the decimal number: ");
var num=parseInt(util.readInput());

let Bnum=(util.toBinaryConversion(num));              //calling binary no function
console.log("Binary no of"+num+" is: "+Bnum);

// let no=util.SwapNibble(Bnum);                       // call function of swaping nibbles
// console.log("Binary no after swapping nibbles is: "+no);

// call function of swaping nibbles 
let decimal=util.SwapNibble(Bnum);
console.log("Decimal number of swapped binary no is : "+decimal);