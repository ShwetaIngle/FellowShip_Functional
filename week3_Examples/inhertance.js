/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_Examples$ node exampleClass.js
 *  
 *  Purpose: class Inheritance
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   4-09-2019
 *
 ******************************************************************************/

    /*
     * single inheritance
     */

class Demo1
{
    display()
    {
        console.log("this is Demo1");        
    }
}

class Demo2 extends Demo1
{
    show()
    {
        console.log("this is Demo2");        
    }
}
console.log("Single Inheritance----");
let obj = new Demo2();
obj.display();
obj.show();


/*
 * multilevel inheritance
 */

class Example1
{
    show()
    {
        console.log("multilevel inhertance class 1");        
    }
}

class Example2 extends Example1
{
    display()
    {
        console.log("multilevel inhertance class 2");        
    }
}

class Example3 extends Example2
{
    inhertance()
    {
        console.log("multilevel inhertance class 3");        
    }
}
console.log("\n\n Multilevel Inheritance----");
let obj3 = new Example3();
obj3.show();
obj3.display();
obj3.inhertance();

/*
 * Hierarchical inheritance
 */
class First
{
    name()
    {
        console.log("My name is xyz");        
    }
}

class Second extends First
{
    age()
    {
        console.log("Age : 25");        
    }
}

class Third extends First
{
    address()
    {
        console.log("Address : Govandi,Mumbai");        
    }
}
console.log("\n\n Hierarchical Inheritance----");
let myobj = new Second();
myobj.name();
myobj.age();
let myobj3 = new Third();
myobj3.name();
myobj3.address();