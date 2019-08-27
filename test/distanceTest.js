/*
    * @purpose: test case of Euclidean distance
    * @author: Shweta Ingle
    * @ version: 1.0
    * since: 26-08-2019
*/


const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d.EculideanDistance(2,3);
it("value of x & y points must be >=0",function(){
    assert.equal(value,"value of x & y points must be >=0");
});

value=d.EculideanDistance('s',2);
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

//value = d.EculideanDistance(-1,2);
// it("value of x & y points must be >=0",function(){
//     assert.equal(value,"value of x & y points must be >=0");
// });

});