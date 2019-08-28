const util=require('../Utility/Utility.js');

console.log("Enter the choice: 1.temperature in Celsius  2.temperature in Fahrenheit ");
let  ch=parseInt(util.readInput());

switch(ch)
{
case 1:{
        console.log("Enter the temperature in Celsius:");
        var f=parseInt(util.readInput());
        
        var c=util.CelsiusToFahrenheit(f);
        console.log("Celsius to Fehrenheit converted temp: "+c);
        break;
    } 
case 2:{
        console.log("Enter the temperature in Fehrenheit:");
        var t=parseInt(util.readInput());
        
        var c=util.FahrenheitToCelsius(t);
        console.log("Fehrenheit to Celsius converted temp: "+c);
        break;
    } 
}