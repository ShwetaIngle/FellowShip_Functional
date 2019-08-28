const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data. dayofWeek(8, 28, 2019);
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

value=data. dayofWeek(8, 28, 'year');
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

value=data. dayofWeek(13, 28, 2019);
it("enter value of month between 1-12 and value of day between 1-31",function(){
    assert.equal(value,"enter value of month between 1-12 and value of day between 1-31");
});

value=data. dayofWeek(1, -28, 2019);
it("only positive numbers are valid",function(){
    assert.equal(value,"only positive numbers are valid");
});


});