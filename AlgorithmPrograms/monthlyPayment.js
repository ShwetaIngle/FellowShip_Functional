const util=require('../Utility/Utility.js');

console.log("Enter the principal amount: ");
var p=util.readInput();

console.log("Enter the rate of interest: ");
var r=util.readInput();

console.log("Enter the no of years; ");
var y=util.readInput();

var pay=util.MonthPay(p , r , y);
console.log("Monthly payment: "+pay);



