const util=require('../Utility/Utility.js');

console.log("Enter the choice: 1.temperature in Celsius  2.temperature in Fahrenheit ");
let  ch=util.readInput();

switch(ch)
{
case 1:{
        console.log("Enter the temperature in Celsius:");
        var f=util.readInput();
        
        var c=util.CelsiusToFahrenheit(t);
        console.log("Celsius to Fehrenheit converted temp: "+f);
        break;
    } 
case 2:{
        console.log("Enter the temperature in Fehrenheit:");
        var t=util.readInput();
        
        var c=util.FahrenheitToCelsius(t);
        console.log("Fehrenheit to Celsius converted temp: "+c);
        break;
    } 
}