
const read=require("readline-sync");

module.exports = {

/* Function for the Input */
    readInput(){
        let input= read.question();
        return input;
    },


/*
Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour), 
the National Weather Service defines the effective temperature (the wind chill) to be:
Note: the formula is not valid if t is larger than 50 in absolute value or if v is 
larger than 120 or less than 3 (you may assume that the values you get are in that range). 
*/
    windChill(t, v)
    {
        let w=35.74 + (0.6215*t) + (0.4275*t- 35.75)* Math.pow(v,0.16);
        return w;
    },



/* 
finding 2 roots of the quadratic equation
*/
    QuadraticRoot(a, b, c)
    {
        let delta = b*b - 4.0*a*c;
        sroot=Math.sqrt(delta);

        let root1 = (b + sroot) / (2*a);
        let root2 = (b - sroot) / (2*a);

        console.log(root1);
        console.log(root2);
    },
/*
StopWatch
*/	
		StartTime()
		{
            var t= new Date;
            var start = t.getSeconds();
            return start;
        },
		EndTime()
		{
			var d= new Date;
            var end = d.getSeconds();
            return end;
        },
		ElapsedTime(start , end)
		{
			var elapsed=(end-start);
			return elapsed;
        },
        
/*  Euclidean distance from the point (x, y) to the origin (0, 0). */

EculideanDistance(a , b)
{
    distance=Math.sqrt(a*a+b*b);
    return distance;
},

/* Sum of three integer ----
    N number of integer, and N integer input array
-> Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0

*/
Sum()
{
    console.log("Enter the size of array: ");
    var n= read.question();
    
    var a=new Array(n);       //array of n size
    var i=0,j=0,k=0;

    
     
    for(i=0;i<n;i++)
    {
        console.log("Enter the array elements: ");
        a[i]=read.question;      //getting data inot array
    }
    for(i=0;i<n;i++)
    {
        if(i>=1)
        {
            for(j=1;j<n;j++)
            {
                if(i>=2)
                {
                    for(k=2;k<n;k++)
                    {
                        if(a[i] + a[j] + a[k] == 0)
                         return true;
                        else
                            return false;
                    }
                }
            }
        }
        
    }

}




}

