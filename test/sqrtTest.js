const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d.SquareRoot(10);
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

 value=d.SquareRoot('s');
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

value=d.SquareRoot(-2);
it("enter only non negative numbers",function(){
    assert.equal(value,"enter only non negative numbers");
});


});