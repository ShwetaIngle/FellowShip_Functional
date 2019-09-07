const read = require("readline-sync");

class Regex
{

     /* Function for the Input */
     readInput() {
        let input = read.question();
        return input;
    }

    /**
    * purpose method to replace name using regex
    *
    *  @param name taken from user
    */

   replaceName(username, inputMsg, regex1)
   {
       try
       {
          if(regex1.test(username)!=true)  throw "Name must be in string only"
          
          return inputMsg.replace(/<name>/ig,username)                 
       }
       catch(err){
           return err;
       }
   }

   /**
   * purpose method to replace full name using regex
   *
   *  @param fullname taken from user
   */

  replaceFullName(fullName, inputStr, regex2)
  {
     try
     {
        if(regex2.test(fullName)!=true)  throw "Full name must be in string only" 

       return inputStr.replace(/<full name>/ig,fullName)   
     }
     catch(err)
     {
         return err;
     }
  }

   /**
   * purpose method to replace contact number using regex
   *
   *  @param contact no taken from user
   */

  replaceContact(Contact, inputStr, regex3)
  {
     try
     {
       if(regex3.test(Contact)!=true)  throw "Contact must be in numbers only"
       if(Contact.length < 10)  throw "Enter correct contact no"

       return inputStr.replace(/<xxxxxxxxxx>/ig,Contact)   
     }
     catch(err)
     {
         return err;
     }
  }
}





module.exports = {Regex}