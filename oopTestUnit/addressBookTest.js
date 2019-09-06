
/******************************************************************************
 *  Execution:    /home/user/Desktop/shweta/AddressBookTestUnit/ mocha test.js
 *  
 *  Purpose: Address Book test unit
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   06-09-2019
 *
 ******************************************************************************/


const assert = require('chai').assert;

const util = require('../AddressBook/entryData');


describe("test cases", function(){

    let dataObject = new util.addressBook();

   

it("test",function(){
    dataObject.firstName = "sffg"
    let addmsg1 = dataObject.addData()
    assert.equal(addmsg1,"done");
});



it("test",function(){
    dataObject.firstName = 123
let addmsg2 = dataObject.addData()
    assert.equal(addmsg2,"only string inputs are valid");
});

});