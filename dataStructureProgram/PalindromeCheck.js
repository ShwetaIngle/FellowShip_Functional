/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: check Palindrome string
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   31-08-2019
 *
 ******************************************************************************/

const util = require("../Utility/dsUtility.js");

var input = new util.ReadInput();

let qobj = new util.Queue();//object of Queue class 

let str = new String();
console.log("Enter the input string: ");
str = input.readInput();

qobj.stringPalindrome(str)
