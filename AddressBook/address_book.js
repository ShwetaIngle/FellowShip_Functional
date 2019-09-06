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

    console.log("Enter the choice : 1.Add data \t 2.Delete data \t 3.Search Data \t 4.Sort");
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
            obj.Zip = parseInt(obj.readInput());

            console.log("Enter phoneNo name=");
            obj.phoneNo = parseInt(obj.readInput());

            obj.addData();
            break;
        }
        case 2:
        {
            console.log("Enter the first name : ");
            obj.firstName = obj.readInput();
            console.log("Enter the phoneNo : ");
            obj.phoneNo = parseInt(obj.readInput());
            let value = obj.deleteData();
            console.log(value);            
            break;            
        }
        case 3:
        {
            console.log("Enter the choice: 1.Search by first name  2.Search by phone no");
            let choice = parseInt(obj.readInput());

            switch(choice)
            {
                case 1:
                {
                    console.log("Enter the first name:");
                    obj.lastName = obj.readInput();
                    let sortresult = obj.searchByFirstName();
                    console.log(sortresult);
                    break;
                }
                case 2:
                {
                    console.log("Enter the phone number :");
                    obj.phoneNo = parseInt(obj.readInput());
                    let sortresult = obj.searchByPhoneNo();
                    console.log(result);
                    break;
                }
            }
            
        }
        case 4:
        {
            console.log("Enter the choice: 1.Sort by last name  2.Sort by zip no");
            let ch1 = parseInt(obj.readInput());

            switch(ch1)
            {
                case 1:
                {                    
                    let result = obj.sortByLastName();
                    console.log(result);
                    break;
                }
                case 2:
                {
                    let result = obj.sortByZip();
                    console.log(result);
                    break;
                }
            }
        }
    }
    
    
 