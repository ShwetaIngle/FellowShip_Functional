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
const utility = require("./Utility.js");
const read = require("readline-sync");

var fs = require('fs');



    class inventryDataManagement
    {

        //read json file
        readJson()
        {
            return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/json files/inventryDataManagement.json"));
        }
    /**
    * purpose method for inventoryData management
    *
    * data taken from json file
    */

    inventoryData()
    {

    //access .json file
    var data = this.readJson();
    //console.log(data); 
    // console.log(data.Rice[0].name);  
    
    //  Calculate the value for Rice Inventory 
    
    let rice_val=0, Pulses_val=0, Wheat_val=0;

    for(let itr in data.Rice)
    {
        var rval=(data.Rice[itr].weight*data.Rice[itr].price);  
        // console.log("value of "+data.Rice[itr].name+" : "+rval);
        rice_val += rval; 
    }
    
    
    //  Calculate the value for pulse Inventory
        
    for(let itr in data.Pulses)
    {
        var pval=(data.Pulses[itr].weight*data.Pulses[itr].price);        
        // console.log("value of "+data.Pulses[itr].name+" : "+pval);
        Pulses_val += pval
    }
        
    //  Calculate the value for wheat Inventory
        
    for(let itr in data.Wheat)
    {
        var Wval=(data.Wheat[itr].weight*data.Wheat[itr].price);       
        Wheat_val += Wval;
    }
    let total = rice_val + Pulses_val + Wheat_val;
    return total;
    }

    /**
    * purpose method to calculate value of rice in InventoryFactory
    *
    * data taken from json file
    */
    riceData()
    {
        let data = this.readJson();
        let str = ""
        for(let itr in data.Rice)
        {
            var rval=(data.Rice[itr].weight*data.Rice[itr].price);  
            str += data.Rice[itr].name+":- "+rval+" , "
        } 
        return str; 
    }

    /**
    * purpose method to calculate value of pulses in InventoryFactory
    *
    * data taken from json file
    */
    pulsesData()
    {
        let data = this.readJson();
        let str = ""
        for(let itr in data.Pulses)
        {
            var rval=(data.Pulses[itr].weight*data.Pulses[itr].price);  
            str += data.Pulses[itr].name+":- "+rval+" , "
        } 
        return str; 
    }

    /**
    * purpose method to calculate value of wheat in InventoryFactory
    *
    * data taken from json file
    */
    wheatData()
    {
        let data = this.readJson();
        let str = ""
        for(let itr in data.Wheat)
        {
            var rval=(data.Wheat[itr].weight*data.Wheat[itr].price);  
            str += data.Wheat[itr].name+":- "+rval+" , "
        } 
        return str; 
    }

}


module.exports = {inventryDataManagement}