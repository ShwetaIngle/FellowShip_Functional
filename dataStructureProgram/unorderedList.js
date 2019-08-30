/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: Linked list
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   29-08-2019
 *
 ******************************************************************************/

const util = require("../Utility/dsUtility");

var fs = require('fs');
/*
 *read file contents. split it into words and arrange in linked list
 */
var filecontent = fs.readFileSync('word.txt','utf8');
//console.log(filecontent);
filecontent = filecontent.trim();

let filedata = filecontent.split(" ");
console.log(filedata);

var ll = new util.linkedList();

for(let i=0; i<filedata.length;i++)
{
    ll.insert(filedata[i]);
}
//ll.size_of_list();

console.log("Enter the word: ");
var value = ll.readInput();

ll.searchElement(value);
 
ll.size_of_list();
ll.printList();
    

