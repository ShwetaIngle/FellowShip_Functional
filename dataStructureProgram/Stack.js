/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: Stack
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   31-08-2019
 *
 ******************************************************************************/

const util = require("../Utility/dsUtility.js")

var stackobj = new util.Stack;

let str = "(5+6)*(7+8)/(4+3)(5+6)*(7+8)/(4+3)";


for(let i=0; i<str.length-1; i++)
{
    if(str.charAt(i) === '(')
    {
        //console.log("24--"+str.charAt(i));
        
        stackobj.push(str.charAt(i));

        //console.log("push---"+stackobj.printStack());
        
    }
    else if(str.charAt(i) === ')')
    {
        //console.log("32--"+str.charAt(i));
        let a = stackobj.pop(); 
    }
}


console.log(stackobj.push(50));
stackobj.printStack();

let result = stackobj.isEmpty();
console.log(result);

//console.log(stackobj.isEmpty());

