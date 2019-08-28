const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data.bubbleSort([10,2,33,5]);
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

value=data.bubbleSort([10]);
it("not enough data",function(){
    assert.equal(value,"not enough data");
});

value=data.bubbleSort([10 , 'a' , 12]);
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});


});