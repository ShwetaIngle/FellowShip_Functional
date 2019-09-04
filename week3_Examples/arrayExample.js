/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_Examples$ node arrayExample.js
 *  
 *  Purpose:  Array=> merge/split/filter/search/map
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   4-09-2019
 *
 ******************************************************************************/

function array()
{   
    let arr = [85, 56, 5, 26, 45]
    let stringarr = ['a','b','c']

    let arrmerge = arr.concat(stringarr);
    console.log("array merge => "+arrmerge);
    
    let arrsplice = arr.splice(2,0, 11,22);
    console.log("array splice => "+arrsplice);
    
    // let arrfilter = arr.filter();
    // console.log("array filter => "+arrfilter);
    
   
    
}

array();