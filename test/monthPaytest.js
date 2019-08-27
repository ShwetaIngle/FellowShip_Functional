const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data. MonthPay(1500 , 10, 5);
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

value=data. MonthPay('s' , 10, 5);
it("principal, rate, year should be positive value",function(){
    assert.equal(value,"principal, rate, year should be positive value");
});


});