const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data.  InsertionSort([10,2,33,5]);
it("not enough data",function(){
    assert.equal(value,"not enough data");
});

value=data.  InsertionSort([10]);
it("not enough data",function(){
    assert.equal(value,"not enough data");
});

value=data.  InsertionSort([10 , 'a' , 12]);
it("only string inputs are valid",function(){
    assert.equal(value,"only string inputs are valid");
});


});