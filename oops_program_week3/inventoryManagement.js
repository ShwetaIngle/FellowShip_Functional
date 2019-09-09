/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node linkedList.js
 *  
 *  Purpose: inventry data management
 *            Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON.
 *            Calculate the value for every Inventory. 

 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/

function inventoryDataManage()
{
    const util = require("../Utility/InventoryDataUtility.js")

    let obj = new util.inventryDataManagement
    let val = obj.inventoryData()
    console.log("\nTotal value of rice, pulses and wheat : "+val);    

}
    inventoryDataManage();