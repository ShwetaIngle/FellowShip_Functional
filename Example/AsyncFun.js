// unction resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     var result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: 'resolved'
//   }
  
//   asyncCall();
  
var fs = require('fs');
 
var contents = fs.readFileSync('/home/user/Desktop/shweta/FunctionalPrograms/word.txt') 
    console.log(contents.toString());

 
console.log('after calling readFile');