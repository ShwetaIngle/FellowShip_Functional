const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d. vendingMachine(1000);
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

value=d. vendingMachine('abc');
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

value=d. vendingMachine(-15);
it("enter only non negative numbers",function(){
    assert.equal(value,"enter only non negative numbers");
});



});