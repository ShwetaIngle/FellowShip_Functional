const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data. Sum([2, 3,4, 5]);
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});


let value=data. Sum([2, 3,'s', 5]);
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

value=data. Sum([2, 5]);
it("enter at least 3 number of elements in array",function(){
    assert.equal(value,"enter at least 3 number of elements in array");
});


});