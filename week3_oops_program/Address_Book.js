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

/*
possible to add a new person to an address book, to edit existing information about a person
(except the person's name), and to delete a person. It must be possible to sort the entries in the
address book alphabetically by last name (with ties broken by first name if necessary), or by ZIP code (with
*/


const util = require("../Utility/week3Utility.js")

function addressRecord()
{
    let obj = new util.address_Book();
    obj.addData();

    console.log("Enter the choice: 1.Add \t 2.Delete \t 3.Edit \t 4.Search");
    let ch = util.readInput();


        switch(ch)
        {
            case 1:
            {
                obj.addData(); 
            }
            case 2:
            {
                obj.deleteData();
            }
            case 3:
            {
                obj.editData();
            }
            case 4:
            {
                obj.searchData();
            }
            default:
            {

            }
        }
    
}
addressRecord();