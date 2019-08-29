/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: Determines whether or not n is prime.
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   06-08-2017
 *
 ******************************************************************************/

const util = require("../Utility/dsUtility");

var fs = require('fs');
/*
 *read file contents. split it into words and arrange in linked list
 */
var filecontent = fs.readFileSync('word.txt','utf8');
console.log(filecontent);

var str = filecontent.split(",");
//console.log(str);

var ll = new util.LinkedList();

for(let i=0; i<str.length;i++)
{
    ll.add(str[i]);
}
ll.size_of_list();


console.log("Enter the word to be remove: ");
var val = ll.readInput();

ll.removeElement(val);
ll.printList();

console.log("Enter the word to be add: ");
var val = ll.readInput();

ll.add(val);

 //ll.searchWord(searchval);
 
 ll.size_of_list();
 ll.printList();





    

