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

function Stock_Report()
{
    const util = require("../Utility/stockReportUtility")

    let stockval = new util.Stock_Report;  
    stockval.report()
    
}
Stock_Report();