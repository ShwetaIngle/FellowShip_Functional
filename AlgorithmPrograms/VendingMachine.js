const util= require('../Utility/Utility.js');

console.log("Enter the amount : ");
var amount = parseInt(util.readInput()); 
var notecount = util.vendingMachine(amount);

