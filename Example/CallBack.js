

// function add(a , b , callback){
    
//   console.log(a+b);  
    
//   callback();
    
// }

// function disp(){
//     console.log("Done");    
// }
// add(4 , 5, disp);           //disp fun is passed as 3rd argument of add fun


let p= new Promise(function(resolve , reject)  {

    let a=1+1;
    if(a==2)
        resolve(console.log('success'));
         
    else{
        reject(console.log('fail'));
    }
});

