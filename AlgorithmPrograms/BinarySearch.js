const util=require('../Utility/Utility.js');

console.log("Enter the size of array: ");
    var size=util.readInput();

    var a=new Array(size);

    console.log("Enter the elements of array: ");


    for(let i=0;i<size;i++)
    {
        a[i]=util.readInput();
    }
    console.log("Enter the element to be search: ");
    var skey=util.readInput();
    
    util.binarSearch(a, skey);


