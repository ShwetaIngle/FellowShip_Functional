/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node Address_Book.js
 *  
 *  Purpose: Address Book
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/

const util = require("./entryData.js");

    let obj = new util.addressBook();

    console.log("Enter the choice : 1.Add data \t 2.Delete data");
    let ch = parseInt(obj.readInput());   

    switch(ch)
    {
        case 1:
        {
            console.log("Enter first name=");
            obj.firstName = obj.readInput();
            // console.log(obj.firsName);
            
            console.log("Enter last name=");
            obj.lastName = obj.readInput();

            console.log("Enter address name=");
            obj.Address = obj.readInput();

            console.log("Enter city : ");
            obj.City = obj.readInput();

            console.log("Enter state : ");
            obj.State = obj.readInput();

            console.log("Enter zip : ");
            obj.Zip = obj.readInput();

            console.log("Enter phoneNo name=");
            obj.phoneNo = obj.readInput();

            obj.addData();
            break;
        }
        case 2:
        {
            console.log("Enter the first name : ");
            obj.firstName = obj.readInput();
            obj.deleteData();
            break;            
        }
    }
    
    
 