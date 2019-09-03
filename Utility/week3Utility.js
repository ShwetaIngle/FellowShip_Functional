/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node linkedList.js
 *  
 *  Purpose: inventry data management 
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/

/**
 * inventry data management 
 *
 * @ Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. 
 *  Calculate the value for every Inventory. 
 */

const read = require("readline-sync");

module.exports = {

    /* Function for the Input */
    readInput() {
        let input = read.question();
        return input;
    },


    inventoryDataManagement()
    {
        var fs = require('fs');

    //access .json file
    var data = JSON.parse(fs.readFileSync('/home/user/Desktop/shweta/week3_oops_program/inventryDataManagement.json'));
    // console.log(data); 
    // console.log(data.Rice[0].name);  
    
    //  Calculate the value for Rice Inventory 
    
    let rice_val=0, Pulses_val=0, Wheat_val=0;

    for(itr in data.Rice)
    {
        var rval=(data.Rice[itr].weight*data.Rice[itr].price);  
        console.log("value of "+data.Rice[itr].name+" : "+rval);
        rice_val += rval; 
    }
    console.log();
    
    //  Calculate the value for pulse Inventory
        
    for(itr in data.Pulses)
    {
        var pval=(data.Pulses[itr].weight*data.Pulses[itr].price);        
        console.log("value of "+data.Pulses[itr].name+" : "+pval);
        Pulses_val += pval
    }
    console.log();
    
    //  Calculate the value for wheat Inventory
        
    for(itr in data.Wheat)
    {
        var Wval=(data.Wheat[itr].weight*data.Wheat[itr].price);        
        console.log("value of "+data.Wheat[itr].name+" : "+Wval);
        Wheat_val += Wval;
    }
    let total = rice_val + Pulses_val + Wheat_val;
    return total;
    },


}