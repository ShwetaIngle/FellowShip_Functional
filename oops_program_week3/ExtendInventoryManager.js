/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node ExtendInventoryManager.js
 *  
 *  Purpose: Inventory manager
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   8-09-2019
 *
 ******************************************************************************/

 const util = require("../Utility/InventoryDataUtility.js")

 function DataManagement()
 {
     let myObj = new util.inventryDataManagement();

     let rice_val = myObj.riceData();
     console.log("All rice data values : ",rice_val);

     let pulse_val = myObj.pulsesData();
     console.log("All pulses data values : ",pulse_val);

     let wheat_val = myObj.wheatData();
     console.log("All wheat data values : ",wheat_val);
     
 }

 DataManagement();