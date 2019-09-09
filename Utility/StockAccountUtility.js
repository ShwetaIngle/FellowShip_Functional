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

    writeReportJson(datawrite)
    {
        return fs.writeFileSync("/home/user/Desktop/shweta/json files/stockReport.json", JSON.stringify(datawrite))
    }

    writeAccJson(datawrite)
    {
        return fs.writeFileSync("/home/user/Desktop/shweta/json files/StockAccount.json", JSON.stringify(datawrite))
    }
    /**
    * purpose method to buy stock
    *
    *  @param name, no of share, stock name taken from user using getter/setter
    */

    Buy()
    {
        var jreportData = this.readStockReportJson();
        
        var jaccData = this.readStockAccJson();
        
        for(let i=0; i<jreportData.length; i++)
        {
            if(jreportData[i].Stock_Names == this.stock_Name)
            {
                if(this.No_ofShare < jreportData[i].Number_of_Share) 
                {               
                    var price = this.No_ofShare * jreportData[i].Share_Price;

                    for(let a=0; a<jaccData.length; a++)
                    {
                        if(jaccData[a].userNames == this.User_Name && jaccData[a].acc_balance > price)
                        {
                            // if(jaccData[a].acc_balance > price)
                            // {
                                jaccData[a].acc_balance = jaccData[a].acc_balance - price;

                                for(let k=0; k<jaccData[a].Stock_Names.length; k++)
                                {
                                    if(jaccData[a].Stock_Names[k].Names == this.stock_Name)
                                    {
                                        jaccData[a].Stock_Names[k].Number_of_Share += this.No_ofShare
                                        //return jaccData[a].acc_balance;
                                    }
                                // }                               
                            }           
                            // else{
                            //     let msg = "not enough balance to buy "+this.No_ofShare+" stock share";
                            //     return msg;
                            // } 
                            break;               
                        }
                        // else
                        // {
                        //     return "Enter correct user name"
                        // }
                    }
                    jreportData[i].Number_of_Share=jreportData[i].Number_of_Share - this.No_ofShare;
                    //console.log("125---",jreportData[i].Number_of_Share);
                    break;
                }
                // else
                // {
                //     let str = "only "+ jreportData[i].Number_of_Share +" shares are available"
                //     return str
                // }
            }
            // else
            // {
            //     return "enter valid stock name"  
            // }
        }
        this.writeReportJson(jreportData);

        this.writeAccJson(jaccData);        

    }

    checkData()
    {
        var jreportData = this.readStockReportJson();        
        var jaccData = this.readStockAccJson();

        let count=0, flag=0;
        for(let i=0; i<jreportData.length; i++)
        {
            var price = this.No_ofShare * jreportData[i].Share_Price;

            // check stock name & no of share
            if(jreportData[i].Stock_Names == this.stock_Name
                && this.No_ofShare < jreportData[i].Number_of_Share)
            {
                count =1
                break;
            }
            else{
                count =0 
            }
        }
        
        for(let a=0; a<jaccData.length; a++)
        {
            
            if(jaccData[a].userNames == this.User_Name && jaccData[a].acc_balance > price)
            {
                flag = 1;
                break;
            }
        }
        if(count == 1 && flag == 1)
        {
            this.Buy();
            return "thank you"
        }
        else{
            return "Enter correct data"
        }
    }

    /**
    * purpose method to sell stock
    *
    *  @param name, no of share, stock name taken from user using getter/setter
    */

   sellCheck()
    {
        let jsonData = this.readStockAccJson();
        let flag = 0;

        for(let a=0; a<jaccData.length; a++)
        {            
            if(jaccData[a].userNames == this.User_Name )   //check user name
            {
                for(let k=0; k<jaccData[a].Stock_Names.length; k++)
                {
                    //check stock name
                    if(jaccData[a].Stock_Names[k].Names == this.stock_Name)
                    {
                        flag = 1;
                        break;
                    }
                }           
                
            }
        }

    }
     


}




module.exports = {stockAccount}