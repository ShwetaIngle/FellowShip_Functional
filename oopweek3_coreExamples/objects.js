/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_Examples$ node objects.js
 *  
 *  Purpose: Execute object create, read, update , delete example
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   4-09-2019
 *
 ******************************************************************************/


//object created as 'person'
let person = {
    name : "Shweta",
    lastname : "Ingle",
    Age : 21,
    contact_no : 8624956036
}


//read the objects

console.log(person);
console.log("reading objects: "+person.name+"\t"+person.lastname+"\t"+person.Age+"\t"+person.contact_no+"\n");

//delete object

delete person.Age;                         
console.log("delete object: "+person.name+"\t"+person.lastname+"\t"+person.Age+"\t"+person.contact_no+"\n");

//update object

person['name'] = "soni"
person.Age = 22

console.log("Updated objects : "+person.name+"\t"+person.Age+"\n");
