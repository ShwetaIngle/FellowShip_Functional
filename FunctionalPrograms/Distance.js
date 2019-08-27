const util=require('../Utility/Utility.js');

 console.log("Enter the value of x: ");
 var x=parseInt(util.readInput());

 console.log("Enter the value of y: ");
 var y=parseInt(util.readInput());

 var dist=util.EculideanDistance(x , y);
console.log(dist);

 