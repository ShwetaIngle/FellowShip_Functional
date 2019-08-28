const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d. SwapNibble(10);
it("enter positive integer number only",function(){
    assert.equal(value,"enter positive integer number only");
});

 value=d. SwapNibble(-10);
it("enter positive integer number only",function(){
    assert.equal(value,"enter positive integer number only");
});

});
