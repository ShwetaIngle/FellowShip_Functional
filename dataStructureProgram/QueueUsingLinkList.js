class Node{
    constructor(data){
    this.data=data;
    this.next=null;
    }
}

class queueLinkedList
{
    constructor()
    {
        this.front = 0;
        this.rear = null;
        this.size = 0;
    }

    enQueue(data)
    {
        let node = new Node(data);

        if(this.front == 0)
        {
            this.front = node;
            this.size++;
            //console.log("front--24--"+this.front.data);  
        }          
        else
        {
            this.rear = this.front;
           
            while(this.rear != null)
            {
                this.rear = this.rear.next;
            }
            this.rear = node;
            //console.log(this.rear.data);
            this.size++;
        }        
    }
    
    
}

var ql = new queueLinkedList();
ql.enQueue(10);
ql.enQueue(20);
ql.enQueue(50);
ql.printQueue();