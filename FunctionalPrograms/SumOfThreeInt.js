const util=require('../Utility/Utility.js');

//var value=util.Sum();
//console.log(value);

/*console.log("Enter the size of array: ");
    var n= util.readInput();
    
    var a=new Array(n);       //array of n size
        
    console.log("Enter the array elements: ");     
    for(i=0;i<n;i++)
    {
        a[i]=util.readInput();      //getting data inot array
    }*/

    var a= [1 ,2, -3];
    var n=a.length;
    var status;
    for(i=0;i<n-2;i++)
    {
        for(j=i+1;j<n-1;j++)
        {
                for(k=j+1;k<n;k++)
                {
                        if(a[i] + a[j] + a[k] == 0)
                        {
                            console.log(true);
                            console.log(a[i] + " " +a[j] +" " +a[k]);                            
                        }                       
                        else
                        console.log(false);
                }
        }
    }
        
    


   
    