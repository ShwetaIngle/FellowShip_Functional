/******************************************************************************
 *  Execution:    ~/Desktop/shweta/dataStructureProgram$ node linkedList.js
 *  
 *  Purpose: linked-list functions: insert(), remove(), printList......
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   30-08-2019
 *
 ******************************************************************************/

const read = require("readline-sync");
var fs = require('fs');

// module.exports = {
// readInput() {
//     let input = read.question();
//     return input;
// }
// }

class Node{
    constructor(data){
    this.data=data;
    this.next=null;
    }
}

class linkedList
{
    /*
     * read the input from user 
     */
    readInput() {
        let input = read.question();
        return input;
    }

    constructor(){
        this.head=null;
        this.size=0;
    }

 /*
  * adds a given element at the end of the list 
  */
    insert(data)
    {   
        var node = new Node(data);
        var temp;

        if(this.head == null)
            this.head = node;
        else
            {
                temp= this.head;
                while(temp.next != null)
                {   
                    temp = temp.next;
                }
             temp.next = node;       
            }
        this.size++;
    }

 /*
  * adds a given element at start of the list 
  */
    insertAtStart(data)
    {
        var node = new Node(data);
    
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    /*
     * adds a given element at specific index of the list 
     */
    insertAt(index, data)
    {
        var node = new Node(data);
        var temp = this.head;

        if(index == 0)
        {   
            this.insertAtStart(data);
        }
        else
        {
            for(let i=0; i< index-1; i++)
            {   
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
        }
        this.size++;
    }

    /*
     *removes the item at position <index>, it needs index position of item 
     */
    remove(index)
    {
        let temp = this.head;
        if(index == 0)
        {
            temp = temp.next;
            this.head = temp;
        }
        else
        {
            let temp = this.head;
            for(let i=0; i<index-1; i++)
            {
                temp = temp.next;
            }
            let n1 = temp.next;
            temp.next = n1.next;
            n1 = null;                          //delet item from memory
        }
        this.size--;
    }

     /*
     *removes the item from list, it needs an item of list
     */
    removeItem(data)
    {
        let temp = this.head;
        let pre = null;

        while (temp != null)
        {
            if(temp.data === data)              //compare temp data with data u want delete
            {
                if(pre.next == null)
                {
                    this.head = temp.next;      
                }
                else
                {
                    pre.next = temp.next;
                }
                this.size--;
            }
            pre = temp;
            temp = temp.next;
        }
    }

    /* 
     * Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
     * and if it found then remove the word from the List
     */

    searchElement(data)
    {
              
        let node = new Node();
        let temp = this.head;
        
        let index = 0;
        let flag=0;

        while(temp != null)
        {
            if(temp.data === data)
            {
                flag = 1;
                break;
            }
            index++;
            temp = temp.next;            
        }
        //console.log(index);

        if(flag == 1)
        {
            this.remove(index);
        //    writeData();
        }
        else{
            this.insert(data);
            //this.writeData();
        }     
        this.writeData();
    }

    /*
     * print size of the list 
     */
    size_of_list(){
        console.log("size of list: "+this.size);
    }

    /*
     * print element of the list 
     */
    printList()
    {
        var temp = this.head;
        var str = "";
        while(temp != null)
        {
            str += temp.data+" ";
            temp = temp.next;
        }
        console.log(str);        
    }

    writeData()
    {
        var temp = this.head;
        var str = "";
        while(temp != null)
        {
            str += temp.data+" ";
            temp = temp.next;
        }
        fs.writeFile('word.txt', str, function(err) {
          if (err) {
               return console.error(err);
            }
        });
        console.log("please check the file.");
        
    }

    
}

/*
 *  stack implementation of push, pop, peak, size and isEmpty functions
 */

class Stack
{
    constructor(){
        this.stackdata = [];       //creates a new stack that is empty
        this.top=0;
    }

    /*
     * adds a new item to the top of stack. It needs data
     */
    push(data)
    {
        this.stackdata[this.top] = data;
        this.top++;
        //console.log("top--"+this.top);        
    }

    /*
     * removes an item from top of stack. It needs no data parameter. The stack is modified
     */
    pop()
    {
        if(this.top == -1)
        {
            console.log("empty stack");
            //break;        
        }
        else
        {
            this.top--;
            let item = this.stackdata[this.top];
            this.stackdata[this.top] = 0;
        }
    }

    /*
     * returns an item from top of stack does not remove it. It needs no data parameter. The stack is modified
     */
    peak()
    {
        if(this.top == -1)
        {
            console.log("empty stack");      
        }
        else
        {
            let item = this.stackdata[this.top-1];
            console.log("peaked item: "+item);
        }

    }

    /*
     * check wether stack is empty or not.
     */
    isEmpty()
    {
        if(this.top == -1)
        {
            return false;     
        }
        else
            return true;
    }

    /*
     * returns size of stack
     */
    size()
    {
        return this.top;        
    }
    /*
     *  print the element of the stack
     */
    printStack() 
    { 
        var str = ""; 
        for (var i = 0; i < this.stackdata.length; i++) 
            str += this.stackdata[i] + " "; 
        return (str); 
    } 
}

/*
 * Queue implementation : enQueue(), deQueue(), printSize(),isEmpty(), printQueue()
 */
class Queue
{

    readInput() {
        let input = read.question();
        return input;
    }

    constructor()
    {
        this.queueData = [];            //creates a new empty queue
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.balance = 25000;
    }

    /*
     * adds a new item to the rear of the queue. It needs data input
     */
    enQueue(data)
        {            
            this.queueData[this.rear] = data;            
            this.rear++;  
            this.size++;
            //console.log(this.rear);
                     
        }

    /*
     * deletes the front item from the queue. It needs no data input
     */
    deQueue()
    {          
        this.front++;  
        this.size--;
    }

    /*
     * returns the size of queue
     */
    
    printSize()
    {
        return this.size;
    }

    /*
     * tests whether queue is empty or not returns boolean value
     */
    isEmpty()
    {
        if(this.size <= 0)
            return true;
        else
            return false;
    }

     /*
     * prints the elements of queue
     */
    printQueue()
    {
    var str = ""; 
    for(let i = this.front; i < this.rear; i++) 
    {
        str += this.queueData[i] +" "; 
    }
    console.log(str);
    }  
    
    withdraw(wamount)
    {
        if(this.balance < wamount){
            return "Not enough balance";
        }           
        else
        {
            this.balance = this.balance - wamount;
            console.log("balance---"+this.balance); 
        }        
    }
    deposite(damount)
    {
        this.balance = this.balance + damount;
       console.log("balance--"+this.balance); 
    }
    cashCounter(people)
    {
        console.log("initial balance---"+this.balance);
        

        for(let i=1; i<=people; i++)
        {

            console.log("Do you want to withdraw or deposite:\nPress 1 for withraw or press 2 for deposite");
            let ch = parseInt(this.readInput());

            switch(ch)
            {
                case 1:
                {
                   console.log("Enter the withdraw amount :");
                    let amount = this.readInput();
                    this.withdraw(amount);
                    this.deQueue();
                    this.printQueue();
                    break;
                } 
            case 2:
                {
                    console.log("Enter the deposite amount :");
                    let amount = this.readInput();
                    this.deposite(amount);
                    this.deQueue();
                    this.printQueue();
                    break;
                }
            }
        }

    }
}

module.exports = {linkedList , Stack, Queue}

