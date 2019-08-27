const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d.toBinaryConversion(8);
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

value=d.toBinaryConversion('s');
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

// value=d.toBinaryConversion(-1);
// it("enter positive integer number only",function(){
//     assert.equal(value,"enter positive integer number only");
// });

});
