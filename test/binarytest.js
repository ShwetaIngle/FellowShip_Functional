const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){
    let value=d.takename();
it("invalid",function(){
    assert.equal(value,"invalid");
});
it("success",function(){
    assert.equal(value,"success");
});

});
