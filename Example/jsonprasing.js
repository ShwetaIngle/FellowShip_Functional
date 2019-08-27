/*
    * @purpose: json parsing
    * @author: Shweta Ingle
    * @ version: 1.0
    * since: 21-08-2019
*/

var fs = require('fs');

//access .json file

var data = JSON.parse(fs.readFileSync('/home/user/Desktop/shweta/Example/jsondata.json'));

//print data

console.log(data);
