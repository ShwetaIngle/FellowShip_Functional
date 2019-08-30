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

class Node{
    constructor(data){
    this.data=data;
    this.next=null;
    }
}

class orderedList
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

    insertData(data)
    {   
        var node = new Node(data);
        let temp;
        //let count=0;

        if(this.head == null)
            this.head = node;


        // else
        //     {
        //         temp= this.head;            
                
        //         while(temp.next != null)
        //         {   
        //             temp = temp.next;
        //         }
        //      temp.next = node; 
        //     }
        //     this.size++;          

        else
        {
            
            temp = this.head;
            if(temp.data > data)
            {
                node.next = temp;
                this.head = node;
            }
            
    
        }
        
    }


 /*
  * sort the linked list 
  */

    // sortList(data)
    // {

    // }



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
            n1.next = null;                          //delet item from memory
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

module.exports = {orderedList}
