/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_Examples$ node interface.js
 *  
 *  Purpose: Interface
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   4-09-2019
 *
 ******************************************************************************/

const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, );
// prints 35
console.log(sum);