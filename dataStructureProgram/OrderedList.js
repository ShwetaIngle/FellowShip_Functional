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

const util = require("../Utility/orderedListUtility.js");

var fs = require('fs');
/*
 *read file contents. split it into words and arrange in linked list
 */
var filecontent = fs.readFileSync('numberinput.txt','utf8');
//console.log(filecontent);
filecontent = filecontent.trim();

let filedata = filecontent.split(" ");
//console.log(filedata);

var ol = new util.orderedList();

for(let i=0; i<filedata.length;i++)
{
    ol.insertData(parseInt(filedata[i]));
}

ol.printList();

console.log("Enter a number: ");
var value = ol.readInput();

ol.searchElement(value);

//ol.printList();