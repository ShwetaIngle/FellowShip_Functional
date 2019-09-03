/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: stack using linked list
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   31-08-2019
 *
 ******************************************************************************/

const util = require("../Utility/dsUtility.js");

let stacklist = new util.linkedList();
let ana = new util.anagramNum();

let pno = new Array()
pno = new util.PrimeNumAnagram();

let anagram = ana.anagram(pno)
// console.log(anagram);

stacklist.stackPushUsingList(anagram)
//stacklist.stackPushUsingList(40)

stacklist.displayStackList();