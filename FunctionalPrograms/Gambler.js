const util=require('../Utility/Utility.js');

    console.log("Enter the stake amount: ");    
    var s=util.readInput();

    console.log("Enter the goal amount: ");    
	var g=util.readInput();

    console.log("how many trials you want to try: ");    
    var t=util.readInput();
        
    util.Gambling(s , g, t);
