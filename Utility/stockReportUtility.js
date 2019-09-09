const utility = require("./Utility.js");
const read = require("readline-sync");

var fs = require('fs');


class Stock_Report
{
    /* Function for the Input */
    readInput() {
        let input = read.question();
        return input;
    }
    report()
    {
        let stockData = JSON.parse(fs.readFileSync('/home/user/Desktop/shweta/json files/stockReport.json'));
        //console.log(stockData);
        
        for(let i=0; i<stockData.length; i++)
        {
            var value = stockData[i].Number_of_Share*stockData[i].Share_Price;
            console.log(stockData[i].Stock_Names+"\t",value);            
        }
    }
}

module.exports = {Stock_Report}