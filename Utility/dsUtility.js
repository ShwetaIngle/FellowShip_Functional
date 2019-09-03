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

class ReadInput {
    readInput() {
        let input = read.question();
        return input;
    }
    }

class Node{
    constructor(data){
    this.data=data;
    this.next=null;
    this.top=null;
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

    /*
     *   stack push using linked list
     */
    stackPushUsingList(data)
    {
        let node = new Node(data);
        
        if(this.head==null)
        {
            this.head=node;
            this.top=node;
        }
        else
        {
            node.next = this.head
             this.head = node
             this.top = node
        }
        // process.stdout.write(` ${this.head.data}`);
        this.size++                                 
    }

    displayStackList() 
    {
        let temp=this.top;
        
        while(temp!=null)
        {
            process.stdout.write(` ${temp.data}`);
            temp=temp.next;
        }
    }

    /*
     *   Queue using linked list
     */

     enQueueLIst()
     {
        let node = new Node();

        
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
        this.balance = 5000;
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
        return this.queueData[this.front-1]; 
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
        this.balance = parseInt(this.balance) + parseInt(damount);
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
                    let amount = parseInt(this.readInput());
                    this.deposite(amount);
                    this.deQueue();
                    this.printQueue();
                    break;
                }
            }
        }

    }
/*
 *  an algorithm to input a string of characters and check whether it is a palindrome.
 */
    stringPalindrome(str)
    {
        for(let i=0; i<str.length; i++ )
        {
            this.enQueue(str.charAt(i))
        }
        //console.log("458--rear--"+this.rear);
        
        this.printQueue()
        let s ="" ;
        let count = 0;
        for(let i=0; i<str.length; i++ )
        {
            s =  this.deQueue()
            //console.log("front-464-"+this.front);
            this.enQueue(s);
            //console.log("rear 467=="+this.rear);
        }
        let j = this.rear-1;
        //console.log("j-480--"+j);
        
        for(let i=this.front; i<this.rear; i++)
        {
                if(this.queueData[i] === this.queueData[j])
                {
                    count = 1;
                }
                else
                {
                    count = 0;
                    break;
                }
                  j--; 
        }
             
        if (count === 1)
        {
            console.log("true");
        }
        else
        {
           console.log("false");
        }
    }

}
/*
 * this function will check wether number is palindrome or not
 */
// function prime(num)
// {
//     let count=0;
    
//     for(let j=2;j<=num;j++)
//     {
//         if(num%j==0)
//         {
//             count++;            
//         }	
//     }
//         if(count==1)
//         {
//            // console.log(i);
//            return num;
//         }
//         else
//         return 0;    
// }

/*
 *  to find prime number within 0-1000
 */

class PrimeNum{

    calPrimeNumber()
    {
    let count=0;
    let col=0;
   
    let arr = new Array()

    for(let i=0;i<10;i++)
    {
        arr[i]=new Array();
    }

    let oneDarr = new Array();
    let oned = 0;

    let row=2;
    for (let i=1; i<=10; i++)
    {        
        process.stdout.write("" + i-1 +"01 to " + 100*i+" are: ");
        
        for(let k=row; k<=100*i; k++)
        {
            //console.log(k);            
            for(let j=2;j<=k;j++)
            {
                if(k%j==0)
                {
                    count++;            
                }	
            }
                // row=j;
            if(count==1)
            {
                //console.log(i);
                    arr[i-1][col]=k;
                    oneDarr[oned] = arr[i-1][col];       //store prime num in one d array to pass it anagram function
                   process.stdout.write(` ${arr[i-1][col]}`);             
                    col++;
                    oned++;
            }
            row=k;
            count=0;
        }            
       console.log();
    }
  console.log("total prime num: "+col);
  
}
}
/*
 * prime num for anagram
 */
function PrimeNumAnagram()
{
    let count=0;
    let col=0;
   
    let arr = new Array()

    for(let i=0;i<10;i++)
    {
        arr[i]=new Array();
    }

    let oneDarr = new Array();
    let oned = 0;

    let row=2;
    for (let i=1; i<=10; i++)
    {        
        //process.stdout.write("" + i-1 +"01 to " + 100*i+" are: ");
        
        for(let k=row; k<=100*i; k++)
        {
            //console.log(k);            
            for(let j=2;j<=k;j++)
            {
                if(k%j==0)
                {
                    count++;            
                }	
            }
                // row=j;
            if(count==1)
            {
                //console.log(i);
                    arr[i-1][col]=k;
                    oneDarr[oned] = arr[i-1][col];       //store prime num in one d array to pass it in anagram function
                  // process.stdout.write(` ${arr[i-1][col]}`);             
                    col++;
                    oned++;
            }
            row=k;
            count=0;
        }            
      // console.log();
    }
    return oneDarr;
}
/*
 * store the numbers in the range that are Anagrams.
 */ 

 class anagramNum
 {
     anagram(pno)
     {
        let anaNum = new Array()
        let notAna = new Array()
        let k=0;
        let j=0;
        let n=0
        let prim=0
        let arr = [[],[]]
        
        // console.log(pno);
        //console.log(pno.length);
        
            for(let i=0; i<pno.length; i++)
            {
                if(pno[i] > 11)
                {
                    let a=pno[i]
                    let len = ""
                    len=a.toString().length;
                
                    n= this.secondNum(pno[i]) 
                    // console.log("26--"+n)   
                    prim = this.prime(n);
                    //console.log("28--"+prim)
        
                
                    if(n==prim)
                    {
                        let val=this.isAnagram(n , pno[i]) 
                        //console.log(val);
                        if(val === true)
                        {
                            //console.log(val);            
                            anaNum[k] = n;  
                            arr[[0],[k]] = n         
                            k++;
                        }
                        else
                        {
                            notAna[j] = pno[i];
                            arr[[0],[k]] = pno[j]
                            j++;
                        }  
                    }                
                 
                }  
            }
        //console.log("anano--"+anaNum);
        // console.log("notanano--"+notAna);
        return arr;        
    }
    /*
 * this function will generate reverse no of prime no 
 */
    secondNum(num)
    {
        let len = num.toString().length;
        //console.log(len);
        let str = num.toString();
        //console.log("22---"+str);
    
        let temp1=""
        let temp2=""
        let temp3 = ""
        let no = 0
        if(len ==2)
        {
            temp1 = str.charAt(0);
            temp2 = str.charAt(1)
            no=temp2+temp1;
        }   
    
        if(len ==3)
        {
            temp1 = str.charAt(0);
            temp2 = str.charAt(1)
            temp3 = str.charAt(2)
            no=temp2+temp3+temp1;
        } 
        //console.log("81 no--"+no);    
        return no;
    }
    /*
     * to find prime number 
     */
    prime(num)
    {
    let count=0;
    
        for(let j=2;j<=num;j++)
        {
            if(num%j==0)
            {
                count++;            
            }	
        }
        if(count==1)
        {
           // console.log(i);
           return num;
        }
        else
        return 0;    
    }   

/*
 *this function will check anagram of two prime no
 */

    isAnagram(num1 , num2)
    {
        let n1=num1.toString();
        let n2=num2.toString();
        let count=0;	
   
       for(let i=0;i<n1.length;i++)
       {
           let s=n1.charAt(i);
           for(let j=0;j<n2.length;j++)
           {					
               if(s==n2.charAt(j))
               {
                   count++;
               }
           }
       }
       if(count==n1.length)
           return true;
       else
           return false;
   
    }
 }




module.exports = {ReadInput, linkedList , Stack, Queue,PrimeNum, PrimeNumAnagram, anagramNum}