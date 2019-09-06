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
   /**
    * function to read the input from user
    *
    * @param returns input taken from user
    */
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


    /**
    * function to read the json file
    *
    * @param returns first_name, last_name, address, city, state, zip, phone_no from json file in array
    */
    readJson()
    {
        return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/json files/AddressBook.json"));
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
}

// address book methods

class addressBook extends DataEntry
{
    /**
    * function to write into json file
    *
    * @ writeFileSync returns first_name, last_name, address, city, state, zip, phone_no into json file in array
    */
    writeJson(datawrite)
    {
        return fs.writeFileSync("/home/user/Desktop/shweta/json files/AddressBook.json", JSON.stringify(datawrite))
    }

    /**
    * purpose function to add data into json file
    *
    * @param writtens user data into json file
    */
    addData()
    {
        try
        {
            if(typeof (this.firstName) != 'string')
                throw "only string inputs are valid"

            this.jsondata = this.readJson()
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
            return "done";
        }
        catch(err)
        {
            return err;
        }
    }

    /**
    * purpose function to delete data from json file
    *
    * @param delets user data from json file
    */
    deleteData()
    {
        let json_Data = this.readJson();
        //console.log(json_Data);
        let i=0;
        let str1 = ""
        let str2 = ""

        let searchResult1 = this.searchByFirstName()
        let searchResult2 = this.searchByPhoneNo();

        if(searchResult1 === "data found" && searchResult2 === "data found")
        {
            for(let i=0; i<json_Data.length; i++)
            {
                str1 = json_Data[i].first_name
                str2 = this.firstName
                if(str1.toLocaleLowerCase() == str2.toLocaleLowerCase() && json_Data[i].phone_no == this.phoneNo )
                {
                    var data=json_Data.splice(i,1);
                    this.writeJson(json_Data)
                }
            }
            //console.log(data)
            return "done";
        }
        else{
            return "data not found"
        }
        
        
    }

    /**
    * purpose function to search data from json file
    *
    * @param search user data from json file
    */

    searchByFirstName()
    {
        let json_Data = this.readJson();
        let flag = 0;
        let str1 = ""
        let str2 = ""

        for(let i=0; i<json_Data.length; i++)
        {
            str1 = json_Data[i].first_name
            str2 = this.firstName
            //if(json_Data[i].first_name == this.firstName)
            if(str1.toLocaleLowerCase() == str2.toLocaleLowerCase())
            {
                flag = 1;
                break;
            }
            else{
                flag = 0
            }
        }      
        if(flag == 1)  
            return "data found"
        else
            return "data not found"

    }

   /**
    * purpose function to search data from json file
    *
    * @param search user data from json file
    */
    searchByPhoneNo()
    {
        let json_Data = this.readJson();
        let flag = 0;
        
        for(let i=0; i<json_Data.length; i++)
        {
            if(json_Data[i].phone_no == this.phoneNo)
            {
                flag = 1;
                break;
            }
            else{
                flag = 0
            }
        }      
        if(flag == 1)  
            return "data found"
        else
            return "data not found"
    }

    /**
    * purpose function to sort data from json file
    *
    * @param sort json file data by last name
    */
    sortByLastName()
    {
        const BookData = this.readJson();
        console.log(BookData.length);

        
        for(let i=1; i<BookData.length; i++)
        {
            let temp;
            for(let j=0; j<i; j++)
            {
                if(BookData[j].last_name > BookData[i].last_name)
                {
                    temp = BookData[j]
                    BookData[j] = BookData[i]
                    BookData[i] = temp
                }
            }
        }
        this.writeJson(BookData)
        return "done";
    }

   /**
    * purpose function to sort data from json file
    *
    * @param sort json file data by zip number
    */
    sortByZip()
    {
        const zipData = this.readJson();
        console.log(zipData.length);

        
        for(let i=1; i<zipData.length; i++)
        {
            let temp;
            for(let j=0; j<i; j++)
            {
                if(zipData[j].zip > zipData[i].zip)
                {
                    temp = zipData[j]
                    zipData[j] = zipData[i]
                    zipData[i] = temp
                }
            }
        }
        this.writeJson(zipData)
        return "done";
    }


}


module.exports =  {DataEntry, addressBook}