/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node StockAccount.js
 *  
 *  Purpose: Commercial data processing
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/


const util = require("../Utility/StockAccountUtility")
let stockObj = new util.stockAccount();

function Commercial_data_processing()
{
    console.log("Welcome....!\n");
    
    console.log("please select-- 1. Old user 2. New user");
    let ch = parseInt(stockObj.readInput());

    switch(ch)
    {
        case 1:
        {
            console.log("please select---  1.Buy \t 2.Sell");
            let choice=parseInt(stockObj.readInput())

            switch(choice)
            {
                case 1:
                {
                    console.log("Enter the user name : ");
                    stockObj.User_Name = stockObj.readInput();
                    console.log("Which stock you want to buy....\tTCS \t Infosys \t Wipro");
                    stockObj.stock_Name = stockObj.readInput();
                    console.log("How many stock you want to buy :  ");
                    stockObj.No_ofShare = parseInt(stockObj.readInput());   
                    
                    let buy = stockObj.checkData(); 
                    console.log(buy);                                                        
                }
                case 2:
                {
                    console.log("Enter the user name:");
                    stockObj.User_Name = stockObj.readInput();
                    console.log("Which stock you want to sell....\tTCS \t Infosys \t Wipro");
                    stockObj.stock_Name = stockObj.readInput();
                    console.log("How many stock you want to sell :  ");
                    stockObj.No_ofShare = parseInt(stockObj.readInput());
                    
                    let sell = stockObj.sellCheck();
                    console.log(sell);
                    break;                    
                }
            }
            break;
        }
        case 2:
        {
            console.log("please enter details to create new account");

            
        }
    }
}

Commercial_data_processing();