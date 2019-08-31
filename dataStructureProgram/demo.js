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


let s = new Stack;

s.push(10)
s.push(20)
console.log("stack data--"+s.printStack());

