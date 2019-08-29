const read = require("readline-sync");
var fs = require('fs');

class Node
{  
// constructor 
constructor(element)
{
   this.element = element;
   this.next = null
}
}

//const head = Symbol("head");

class LinkedList {    

/* Function to the Input */
readInput() {
    let input = read.question();
    return input;
}

constructor() {
   this.head = null;
   this.size = 0;
}
/*
 * adds a given element into the list 
 */
add(element) {
   // creates a new node 
   var node = new Node(element);

   // to store current node 
   var current;

   // if list is Empty add the 
   // element and make it head 
   if (this.head == null)
       this.head = node;
   else {
       current = this.head;

       // iterate to the end of the 
       // list 
       while (current.next != null) {
           current = current.next;
       }

       // add node 
       current.next = node;
   }
   this.size++;  
}

/*
 * removes a given element from the list 
 */
 removeElement(element) {
   var current = this.head;
   var prev = null;

   // iterate over the list 
   while (current != null) {
       // comparing element with current 
       // element if found then remove the 
       // and return true 
       if (current.element === element) {
           if (prev == null) {
               this.head = current.next;
           } else {
               prev.next = current.next;
           }
           this.size--;
           return current.element;
       }
       prev = current;
       current = current.next;
   }
   return -1;
}

/*
 * function to search the word
 */
searchWord(searchval){
    var count = 0; 
    var current = this.head; 
  //console.log(current);
  
    // iterae over the list 
    while (current != searchval) { 
        // compare each element of the list with given element 
        current = current.next;
    }
        if (current.element === searchval) 
        {
           this.removeElement(searchval);
        }
        else{
            this.add(searchval);
        } 
    
}

size_of_list(){
    console.log("size of list: "+this.size);
}

/*
 * prints the list items 
 */

 printList() {
   var curr = this.head;
   var str = "";
   while (curr != null) {
       str += curr.element + " ";
       curr = curr.next;
   }
   console.log(str);
}
}

module.exports = {LinkedList}
