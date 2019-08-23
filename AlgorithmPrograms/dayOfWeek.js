const util=require('../Utility/Utility.js');


console.log("Enter the month: ");
month=util.readInput();

console.log("Enter the date: ");
day=util.readInput();

console.log("Enter the year: ");
year=util.readInput();

var d0=util.dayofWeek(month , day ,year);
console.log(d0);

if(d0==0)
        	console.log("Sunday");
        else if(d0==1)
            console.log("Monday");
        else if(d0==2)
            console.log("Tuesday");
        else if(d0==3)
            console.log("Wednesday");
        else if(d0==4)
            console.log("Thursday");
        else if(d0==5)
             console.log("Friday");
        else if(d0==6)
            console.log("Saturday");
