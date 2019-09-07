const read = require("readline-sync");
var fs = require('fs');

class dataEntry
{
     constructor()
    {
        this.userName = ""
        this.StockName = ""
        this.No_of_Share = ""
        this.AccBalance = ""
    }
    /**
    * function to read the json file
    */
   readStockReportJson()
   {
       return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/json files/stockReport.json"));
   }

   /**
    * function to read the stock account json file
    */
   readStockAccJson()
   {
       return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/json files/StockAccount.json"));
   }
   /**
    * @purpose method to set user name
    *
    * @param name taken from user
    */
   set User_Name(name)
   {
      this.userName = name;
   }
   /**
    * @purpose method to get first name
    */
   get User_Name()
   {
       return this.userName ;
   }

   /**
    * @purpose method to set StockName
    *
    * @param sname taken from user
    */
   set stock_Name(sname)
   {
      this.StockName = sname;
   }
   /**
    * @purpose method to get StockName
    */
   get stock_Name()
   {
       return this.StockName ;
   }

  /**
    * @purpose method to set No_of_Share
    *
    * @param share taken from user
    */
   set No_ofShare(share)
   {
      this.No_of_Share = share;
   }
   /**
    * @purpose method to get No_of_Share
    */
   get No_ofShare()
   {
       return this.No_of_Share ;
   }


   /**
    * @purpose method to set AccBalance
    */
   set Balance(balVal)
   {
      this.AccBalance = balVal;
   }
   /**
    * @purpose method to get StockName
    */
   get Balance()
   {
       return this.AccBalance ;
   }

}

class stockAccount extends dataEntry
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

    Buy()
    {
        var jsonReportData = this.readStockReportJson();
        //console.log(jsonReportData[0]);
        var jsonAccData = this.readStockAccJson();
        //console.log(this.jsonAccData);
        //this.stock_Name="TCS"
        for(let i=0; i<jsonReportData.length; i++)
        {
            if(jsonReportData[i].Stock_Names == this.stock_Name)
            {
                console.log(jsonReportData[i].Stock_Names);
                break;
            }
            else
            {
                console.log("sry");
                //console.log(jsonReportData.Stock_Name)
            }
        }
    }
}

var obj = new stockAccount()
obj.Buy();


module.exports = {stockAccount}