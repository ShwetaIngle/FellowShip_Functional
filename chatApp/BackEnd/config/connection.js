
const mongoose = require("mongoose")

//connect mongodb
mongoose.connect('mongodb://localhost/test')

mongoose.connection.once('open',function(){
    console.log("connection successful"); 

}).on('error',function(error){
    console.log('connection error:',error);
    
});