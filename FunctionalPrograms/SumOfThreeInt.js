const util=require('../Utility/Utility.js');

//var value=util.Sum();
//console.log(value);

console.log("Enter the size of array: ");
    var n= util.readInput();
    
    var a=new Array(n);       //array of n size
        
    console.log("Enter the array elements: ");     
    for(i=0;i<n;i++)
    {
        a[i]=util.readInput();      //getting data inot array
    }
    console.log(a[0]);
    