/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_Examples$ node exampleClass.js
 *  
 *  Purpose: Execute class, constructor, getter, setter
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   4-09-2019
 *
 ******************************************************************************/

 class Rectangle                // class declaration
 {
    constructor(h , w)          // constructor of class
    {
       this.height = h;
       this.width = w
    }

    get area()                     //  getter
    {
        return this.height*this.width;
    }

    static display()                        //static method
    {
        console.log("Hello..");        
    }
 }

 let rect = new Rectangle(10,20)        // object of class
 console.log(rect.area);

 Rectangle.display();                   // calling static method using class name instead of object

   /*
    * In JS we can add properties at any time using object . we don't need to write in constructor only
    */
 rect.color = 'red';
 console.log(rect.color);
 