/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node RegexDemo.js
 *  
 *  Purpose: Regex
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/

 const util = require("../Utility/RegexUtility")

 function Regex_Demo()
 {

    let regObject = new util.Regex();

    var inputStr = " Hello <name>, We have your full name as <full name> in our system. your contact number is 91-<xxxxxxxxxx>. Please,let us know in case of any clarification Thank you BridgeLabz 01/09/2019. "

    var regex1 = /[a-zA-Z]+$/ig;
    var regex2 = /[a-zA-Z]+$/ig;
    var regex3 = /^\d+$/ig;

    var str1 = ""
    var str2 = ""
    var output = ""

    console.log("Enter your name: ");
    let Name = regObject.readInput();

    console.log("Enter your fullname : ");
    let full_name = regObject.readInput();

    console.log("Enter your phone number : ");
    let phNO = regObject.readInput();

    // console.log("nametest--",regex1.test(Name))    
    // console.log("fullname test--",regex1.test(full_name))

    str1 = regObject.replaceName(Name , inputStr, regex1)
    //console.log(str1);
    

    str2 = regObject.replaceFullName(full_name , str1, regex2)
    //console.log(str2);
    
    output = regObject.replaceContact(phNO, str2, regex3)
    console.log(output);
    
 }

 Regex_Demo();



