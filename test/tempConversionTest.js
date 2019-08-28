const assert = require('chai').assert;

const d = require('../Utility/Utility.js');

describe("test cases", function(){

    let value=d. CelsiusToFahrenheit(10);
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

value=d. CelsiusToFahrenheit('abc');
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});



value=d.FahrenheitToCelsius(15);
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});

 value=d.FahrenheitToCelsius('s');
it("only number inputs are valid",function(){
    assert.equal(value,"only number inputs are valid");
});


});