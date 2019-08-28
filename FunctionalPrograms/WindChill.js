/*
Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour), 
the National Weather Service defines the effective temperature (the wind chill) to be:
Note: the formula is not valid if t is larger than 50 in absolute value or if v is 
larger than 120 or less than 3 (you may assume that the values you get are in that range).
*/

const util=require('../Utility/Utility.js');

console.log("Enter the temperature value: ");
let temp=parseInt(util.readInput());

console.log("Enter the wind speed value: ");
let wspeed=parseInt(util.readInput());

let windchill=util.windChill(temp,wspeed);
console.log(windchill);
