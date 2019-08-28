const util=require('../Utility/Utility.js');

    console.log("Enter the stake amount: ");    
    var s=parseInt(util.readInput());

    console.log("Enter the goal amount: ");    
	var g=parseInt(util.readInput());

    console.log("how many trials you want to try: ");    
    var t=parseInt(util.readInput());
        
    util.Gambling(s , g, t);
