const util= require('../Utility/Utility.js');

console.log("Enter the amount : ");
var amount = util.readInput(); 
var notecount = util.vendingMachine(amount);

