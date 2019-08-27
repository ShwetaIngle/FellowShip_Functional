/*
    * @purpose: test case of Euclidean distance
    * @author: Shweta Ingle
    * @ version: 1.0
    * since: 26-08-2019
*/
 
const assert = require('chai').assert;

const data = require('../Utility/Utility.js');

describe("test cases", function(){

let value=data.TwodArray(2, 's');
it("enter only numbers",function(){
    assert.equal(value,"enter only numbers");
});

value=data.TwodArray(2, -1);
it("give at least value of rows and columns >=2",function(){
    assert.equal(value,"give at least value of rows and columns >=2");
});


});