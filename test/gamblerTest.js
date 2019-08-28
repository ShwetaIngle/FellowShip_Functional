/*
    * @purpose: test case of Euclidean distance
    * @author: Shweta Ingle
    * @ version: 1.0
    * since: 26-08-2019
*/

const assert = require('chai').assert;
const utillity = require('../Utility/Utility.js');


describe("test cases", function(){

    let value=utillity.Gambling(50,250,5);
it("done",function(){
    assert.equal(value,"done");
});

 value=utillity.Gambling(-1,250,5);
it("the value of stake & goal must be >1 and give at least 1 trails",function(){
    assert.equal(value,"the value of stake & goal must be >1 and give at least 1 trails");
});

// data=utillity.Gambling( 's', 5 ,1);
// it("Enter values of stake, goal & trails in number only",function(){
//     assert.equal(value,"Enter values of stake, goal & trails in number only");
// });


});