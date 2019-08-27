const util=require('../Utility/Utility.js');

var fs = require('fs');
var a;

fs.open('/home/user/Desktop/shweta/FunctionalPrograms/word.txt', 'r', function (err , fd){
    if(err)
    {
        console.log(err);        
    }
    console.log("file opened successfully");
    
    fs.readFile(fd , function(err , data){
        //console.log(data);

        a=data.toString().split(" ");   //aray to string and split
       // console.log(a);

       a.sort();                       //sort the array
        console.log(a);

    console.log("Enter the element to be search: ");
    var key=util.readInput();
           
    var x=util.binarySearch(a, key); 
    console.log(x);
           
    });

});
   
    

    
    

    

