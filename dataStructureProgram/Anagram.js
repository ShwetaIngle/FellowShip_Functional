/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: check Anagram number within 0 to 1000
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   31-08-2019
 *
 ******************************************************************************/
const util = require("../Utility/dsUtility.js")


function Anagram()
{
let pno = new Array()
pno = new util.PrimeNumAnagram();

let anaobj = new util.anagramNum();
console.log("Anagram numbers: ");
let ana = anaobj.anagram(pno);
console.log(ana);

}
Anagram();