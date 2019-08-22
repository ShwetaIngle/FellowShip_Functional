/*
Start the Stopwatch and End the Stopwatch
-> Measure the elapsed time between start and end
*/

const util=require('../Utility/Utility.js');

console.log("to Start the stopWatch press 1. ");
let s=util.readInput();

if(s==1)
{
   var stime= util.StartTime();
}

console.log("to stop stopwatch press 0.");
let e=util.readInput();

if(e==0)
{
   var etime= util.EndTime();
}

let et=util.ElapsedTime(stime , etime);
console.log(et +"sec");


