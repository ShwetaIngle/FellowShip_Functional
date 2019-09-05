/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node Address_Book.js
 *  
 *  Purpose: Address Book
 * An address book holds a collection of entries, each recording a person's first and last names, 
 * address, city, state, zip, and phone number.
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/

var fs = require('fs');
const read = require("readline-sync");

 class DataEntry
 {
    readInput() {
        let input = read.question();
        return input;
    }
  
    // Constructor - initialization of instance variable
  
    constructor()
    {
        this.first_name = ""
        this.last_name = ""
        this.address = ""
        this.city = ""
        this.state = ""
        this.zip = ""
        this.phone_no = ""
        this.jsondata = this.readJson()
    }

    readJson()
    {
        return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/week3_oops_program/AddressBook.json"));
    }

    /**
    * @purpose method to set first name
    *
    * @param firstname taken from user
    */
    set firstName(name)
    {
       this.first_name = name;
    }
    
     /**
    * @purpose method to get first name
    *
    * @param firstname 
    */
   get firstName()
   {
       return this.first_name ;
   }
    /**
    * @purpose method to set last_name
    *
    * @param last_name taken from user
    */
   set lastName(lastName)
   {
       this.last_name = lastName;
   }

   /**
   * @purpose method to get last_name
   *
   * @param last_name 
   */
  get lastName()
  {
      return this.last_name;
  }

   /**
    * @purpose method to set address
    *
    * @param address taken from user
    */
   set Address(addr)
   {
       this.address = addr;
   }

  /**
   * @purpose method to get address
   *
   * @param address
   */
  get Address()
  {
      return this.address;
  }


   /**
    * @purpose method to set city
    *
    * @param city taken from user
    */
   set City(city)
   {
       this.city = city;
   }

    /**
   * @purpose method to get city
   *
   * @param city 
   */
  get City()
  {
      return this.city;
  }


   /**
    * @purpose method to set state
    *
    * @param state taken from user
    */
   set State(state)
   {
       this.state = state;
   }

    /**
   * @purpose method to get state
   *
   * @param state
   */
  get State()
  {
     return this.state;
  }


    /**
    * @purpose method to set zip
    *
    * @param zip taken from user
    */
   set Zip(zip)
   {
       this.zip = zip;
   }

   /**
   * @purpose method to get zip
   *
   * @param zip 
   */
  get Zip()
  {
    return this.zip;
    }


   /**
    * @purpose method to set phone_no
    *
    * @param phone_no taken from user
    */
   set phoneNo(phone_no)
   {
       this.phone_no = phone_no;
   }  

  /**
   * @purpose method to get phone_no
   *
   * @param phone_no 
   */
  get phoneNo()
  {
      return this.phone_no;
  }

//   add(name)
//   {
//       this.firstName = name
//       console.log(this.firstName);
      
//   }
}

// let data = new DataEntry();
// console.log("Enter first name: ");
// data.firsName=data.readInput();
// console.log(data.firsName);

class addressBook extends DataEntry
{
    
    // readJson()
    // {
    //     return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/week3_oops_program/AddressBook.json"));
    // }
    writeJson(datawrite)
    {
        return fs.writeFileSync("/home/user/Desktop/shweta/week3_oops_program/AddressBook.json", JSON.stringify(datawrite))
    }
    addData()
    {
        // this.jsondata = this.readJson()
        this.jsondata.push(
            {
                "first_name": this.firstName,
                "last_name": this.lastName,
                "address": this.Address,
                "city": this.City,
                "State":this.State,
                "zip": this.Zip,
                "phone_no": this.phoneNo
            }
        )
        this.writeJson(this.jsondata)
    }

    deleteData()
    {

    }
}

module.exports =  {DataEntry, addressBook}