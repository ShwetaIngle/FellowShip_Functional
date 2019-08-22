const util=require('../Utility/Utility.js');

console.log("Enter the no of rows: ");
var row=util.readInput();

console.log("Enter the no of columns: ");
var col=util.readInput();

//util.TwodArray();
var myarray=new Array(3);        
for (i=0; i <3; i++)    
        myarray[i]=new Array(3)                
         myarray[0][0]="One"        
         myarray[0][1]="Two"        
         myarray[0][2]="Three"        
         myarray[1][0]="Four"        
         myarray[1][1]="Five"        
         myarray[1][2]="Six"        
         myarray[2][0]="Seven"        
         myarray[2][1]="Eight"        
         myarray[2][2]="Nine"  
var i,j;
         for(i=0;i<3;i++)
         {
             for(j=0;j<3;j++)
             {
                 console.log(myarray[i][j]+"\t");
             }
            // console.log("\n");
         }

