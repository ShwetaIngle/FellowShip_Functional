
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

function queueCounter()
{
var queueobj = new util.Queue;

console.log("Enter the number of people to be added in queue: ");
var people = queueobj.readInput();


for(let i=1; i<=people; i++)
{
     queueobj.enQueue(i);
    
}
queueobj.cashCounter(people);
// queueobj.printQueue();
}

queueCounter();

