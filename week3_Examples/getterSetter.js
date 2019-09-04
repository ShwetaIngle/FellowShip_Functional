/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_Examples$ node exampleClass.js
 *  
 *  Purpose: Execute class, constructor, getter, setter
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   4-09-2019
 *
 ******************************************************************************/


class Vehicle {
    constructor(model) {
        this.model = model;
    }
    
    get model() {                   //getter
        return this._model;
    }

    set model(value) {               //setter
        this._model = value;
    }
}

let v = new Vehicle(1.8)
console.log(v.model);