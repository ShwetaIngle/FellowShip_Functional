const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data. binarySearch(['ab','xy','ijk'],'ab');
it("only string inputs are valid",function(){
    assert.equal(value,"only string inputs are valid");
});

value=data. binarySearch('a');
it("not enough data",function(){
    assert.equal(value,"not enough data");
});

value=data. binarySearch(10);
it("not enough data",function(){
    assert.equal(value,"not enough data");
});

});