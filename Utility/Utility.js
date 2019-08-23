
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
},


 /* M rows, N Cols, and M * N inputs for 2D Array.
Print function to print 2 Dimensional Array.
*/
TwodArray(row, col)
{
    var arr=new Array(col);
    
    for(let i=0;i<row;i++)
    {
        arr[i]=new Array(col);
    }

    console.log("Enter the elements of array: ");

    
    for(i=0;i<row;i++)
    {
        for(j=0;j<col;j++)
        {
            let input=read.question();
            arr[i][j]=input;
        }
    }
    console.log("2D Array elements ars: ");
    
    for(i=0;i<row;i++)
    {
        console.log(arr[i]);        
    }
},

/*
Gambling program
*/

Gambling(stake, goal , trials)
{
    var bet=0,wins=0;
		
    for(var t=0;t<=trials;t++)
    {
        var cash=stake;
        
        while(cash>0 && cash<goal) 
        {
            bet++;
            if(Math.random()<0.5)
                cash++;					//wins
            else
                cash--;					//lose
        }
        if(cash==goal)
            wins++;
    }
     console.log(wins + " wins of " + trials);
     console.log("Percent of games won = " + 100.0 * wins / trials);
     console.log("Avg  bets           = " + 1.0 * bet / trials);
},

/*
    conversion of decimal number into binary number 106=1101010
*/

    toBinaryConversion(n)
    {
        var b=n;
        
        var binary=new String();
        var b1=new String();
        
        while(n>0)
		{
            b=n%2;         
			b1=b1+b;                //creating binary no
			n=parseInt(n/2);
        }
        var len=b1.length;           //length of binary no
        //console.log(b1.length);
		for(var i=len-1;i>=0;i--){           
			binary=binary+b1.charAt(i);                 //reverse the num
		}
		return binary;
    },

    /*convert to Binary using toBinary function
    Swap nibbles and find the new number.
    Find the resultant number is the number is a power of 2.
    */

        SwapNibble(n)
        {
        let len=n.length;
		var bno=new String();
        bno=n;
        
        if(len!=8)                      //check length of binary no it should be 8 b'coz 1byte=8bit
        {                           
        let a=8-len;
        for(let i=0;i<a;i++)            //add padding of zeros
		{		
			bno=0+bno;
		}
        }		
		console.log("Number after padding: "+bno);
		
        var nibble1=new String();
        var nibble2=new String();
		for(let i=0;i<8;i++)
		{
			if(i==0 || i<=3)
			{
				nibble1=nibble1+bno.charAt(i);
			}
			else
				nibble2=nibble2+bno.charAt(i);
		}		
		let swapnibble=nibble2+nibble1;
		return swapnibble;
        },
    // Decimal conversion of number after swapping nibbles

    DecimalConversion(d)
    {
        var num=new String();
        num=d;
        let deci=0;
        for(let i=7;i>=0;i--)
        {
            let a=num.charAt(i);
                deci=deci+(a*Math.pow(2,i));
        }
        return deci;
    },

    /*
        the square root of a nonnegative number c given in the input using Newton's method:
    */
    SquareRoot(c)
    {
        var epsilon=1.0e-15;
		var t=c;
		
		while(Math.abs(t-c/t)>epsilon*t) {
            t = (c/t + t) / 2.0;
		}
        return t;
    },
    /*reads in three command-line arguments P, Y, and R and calculates the monthly payments
     you would have to make over Y years to pay off a P principal loan amount at R per cent 
    */
   MonthPay(principal , rate , year)
   {
    var r=rate/(12*100);   //monthly interest rate
    var n=12*year;         //no of months
    
    var payment= (principal*r)/(1-Math.pow(1+r,-n));
    var interest= payment * n/principal;
    
    console.log("Total interest: "+interest);
    return (payment);
    
   },

   /*temperature conversion Celsius to Fahrenheit and FahrenheitToCelsius*/ 
   CelsiusToFahrenheit(temp){
    var ft=(temp*(9/5)+32);
    return ft;
    },
    FahrenheitToCelsius(temp) {
    var ct=(temp-32)*5/9;
    return ct;
    },
/*function that takes a date as input and prints the day of the week that date falls on
*/
    dayofWeek( m, d, y)
	{
        console.log(m + ""+ d+""+y);
        
        let y0 = Math.round(y - ((14 - m) / 12));
        console.log("y0="+y0);
        
        let x =Math.round( y0 + y0/4 - y0/100 + y0/400);
        console.log("x="+x);
        let m0 = Math.round(m + 12 * ((14 - m) / 12) - 2);
        console.log("m="+m);
        let day = Math.round((d + x + (31*m0)/12) % 7);
          
        return(day+2);
  	},

/* Bubble sort   
bubbleSort()
{

},*/


/* Binary search of string
*/
binarSearch(arr , key)
{
    
    arr.sort();
    console.log(arr);
     console.log(key);
     
    let first=0;
    let last=arr.length-1;
    console.log(last);
    

   while(first<last)
   {
     let mid=Math.floor((last+first)/2);
     if((arr[mid]===key))
        {
            console.log("element is found at index "+mid);  
            break;     
        }
        else if(arr[mid]>key)
        {
            last=mid-1;       
        }
         else         {
            first=mid+1;      
        }
    }
    if(first>last)
    {
        console.log("element is not found.");
        
    }
},


}