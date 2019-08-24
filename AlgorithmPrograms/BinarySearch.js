const util=require('../Utility/Utility.js');

var fs = require('fs');
var a=[]

fs.open('/home/user/Desktop/shweta/FunctionalPrograms/word.txt', 'r', function (err , fd){
    if(err)
    {
        console.log(err);        
    }
    console.log("file opened successfully");
    
    fs.readFile(fd , function(err , data){
        console.log(data.toString());

        a=data.toString().split(",");
        console.log(a);

        console.log("Enter the element to be search: ");
    var key=util.readInput();
    
    util.binarySearch(a, key);        
    });

});
   
    

    
    

    

