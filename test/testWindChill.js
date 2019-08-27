const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d.windChill(5 , 30);
it("temp must be >50 wind speed should be in 3-120mpr",function(){
    assert.equal(value,"temp must be >50 wind speed should be in 3-120mpr");

});
// //     let v=d.windChill( 7, 150);
// it("wind speed should be in 3-120mpr",function(){
//     assert.equal(v,"wind speed should be in 3-120mpr");
// });

// let content = d.windChill(10,'s');
// it("enter only numbers",function(){
//         assert.equal(content,"enter only numbers");
//     });

value=d.windChill(5 , -30);
it("wind speed must be positive int value",function(){
    assert.equal(value,"wind speed must be positive int value");
});
    

});