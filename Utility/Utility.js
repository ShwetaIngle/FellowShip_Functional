
const read = require("readline-sync");

module.exports = {

    /* Function for the Input */
    readInput() {
        let input = read.question();
        return input;
    },

    // Functional programs

    /*
    Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour), 
    the National Weather Service defines the effective temperature (the wind chill) to be:
    Note: the formula is not valid if t is larger than 50 in absolute value or if v is 
    larger than 120 or less than 3 (you may assume that the values you get are in that range). 
    */
    windChill(t, v) {
        try{
            if(t>50 || v<3 || v>120)
                throw "temp must be >50 and wind speed should be in 3-120mpr";

                if(typeof t!= 'number' || typeof v!='number') throw "enter only numbers";  
                
                if(v < 0) throw "wind speed must be positive int value"; 

        let w = 35.74 + (0.6215 * t) + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
        return w;
        }catch(err){
            return err;
        }
    },



    /* 
    finding 2 roots of the quadratic equation
    */
    QuadraticRoot(a, b, c) {
        try{
            
            if(typeof a!= 'number' || typeof c!='number' || typeof c!='number') throw "enter only numbers";

        let delta = b * b - 4.0 * a * c;
        sroot = Math.sqrt(delta);

        let root1 = (b + sroot) / (2 * a);
        let root2 = (b - sroot) / (2 * a);

        console.log("root 1"+root1);
        console.log("root 2"+root2);
        }catch(err){
            return err;
        }
    },
    /*
    StopWatch
    */
    StartTime() {                       //calculate start time
        var t = new Date;
        var start = t.getSeconds();
        return start;
    },
    EndTime() {                         //take end time
        var d = new Date;
        var end = d.getSeconds();
        return end;
    },
    ElapsedTime(start, end) {               //calculate elapsed time
        var elapsed = (end - start);
        return elapsed;
    },

    /*  Euclidean distance from the point (x, y) to the origin (0, 0). */

    EculideanDistance(a, b) {
        //console.log(parseInt(a) +" "+parseInt(b));
        try{
            if (a<0 || b<0) throw "value of x & y points must be >=0";
               
            if(typeof a!= 'number' || typeof b!='number') throw "enter only numbers";
                
            
            distance = Math.sqrt(a * a + b * b);
            return distance;
        }catch(err){
            return err;
            
        }       
    },

    /* Sum of three integer ----
        N number of integer, and N integer input array
    -> Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0
    
    */
    
Sum(a) {

    try{
        if(typeof a!= 'number') throw "enter only numbers";
    
        if(a.length <3 ) throw "enter at least 3 number of elements in array";

    n=a.length;
    var arr=new Array(n);
    arr=a;   
   
     for (i = 0; i < n - 2; i++) {
         for (j = 1; j < n - 1; j++) {
             for (k = 2; k < n; k++) {
                 if (arr[i] + arr[j] + arr[k] == 0)
                 {
                     console.log(true);                     
                     console.log(`${arr[i]},${arr[j]},${arr[k]}`);
                 }    
                 else
                     console.log(false);                      
             }
         }
     }
     return "success";
    }catch(err){
        return err;
    }
 },

 /* 1D Array take size of array and array elements from user */

 oneDarray() {
    console.log("Enter the size of array: ");
    let n = read.question();

    var arr = new Array(n);

    console.log("Enter the elements of array: ");

    for (let i = 0; i < n; i++) {
        arr[i] = read.question();
    }
    return arr;
},

    /* M rows, N Cols, and M * N inputs for 2D Array.
   Print function to print 2 Dimensional Array.
   */
    TwodArray(row, col) {

        try{
            if(typeof row!= 'number' || typeof col!='number') throw "enter only numbers";

            if(row < 1 || col<1) throw "give at least value of rows and columns >=2"; 

        var arr = new Array(col);

        for (let i = 0; i < row; i++) {
            arr[i] = new Array(col);
        }

        console.log("Enter the elements of array: ");


        for (i = 0; i < row; i++) {
            for (j = 0; j < col; j++) {
                let input = read.question();
                arr[i][j] = input;
            }
        }
        for (let i = 0; i < row; i++) {
            console.log(arr[i]);
        }
        return "success";
    }catch(err){
            return err;
        };
    },

    /*
    Gambling program
    */

    Gambling(stake, goal, trials) {

        try{

            if(stake <=1 || goal<=1 || trials<= 1)
            throw "the value of stake & goal must be >1 and give at least 1 trails ";
                        
            if(stake !='number' || goal!='number' || trials!='number')
            throw "Enter values of stake, goal & trails in number only ";
            
            var bet = 0, wins = 0;

        for (var t = 0; t <= trials; t++) {
            var cash = stake;

            while (cash > 0 && cash < goal) {
                bet++;
                if (Math.random() < 0.5)
                    cash++;					//wins
                else
                    cash--;					//lose
            }
            if (cash == goal)
                wins++;
        }
        console.log(wins + " wins of " + trials);
        console.log("Percent of games won = " + 100.0 * wins / trials);
        console.log("Avg  bets           = " + 1.0 * bet / trials);
        return "done";
    }catch(err){
        return err;
    }
    },

    // permutation of string

    // permutation(str)
    // {
    //     a=str.length;


    // },

    //Write a Program to play a Cross Game or Tic-Tac-Toe Game

    ticTacToe(row , col)
    {
        var arr = [[],[]];
        let str = "";

        for (let i = 0; i < 3; i++) {
            for(let j=0;j<3;j++){
                str += (`${arr[[i][j]] = "__|"}`);       
            }            
            str += "\n";
            for (let k=0; k< 3 ;k++){
                if(row==i && col==k){
                    str += (`${arr[[i][k]] = "X"}`); 
                }

            }
        }
        return str;
    },

    // Algorithm programs

    /*
        conversion of decimal number into binary number 106=1101010
    */

    toBinaryConversion(n) {

       var b;

        try{
            if(typeof n!= 'number') throw "enter only numbers";

            if(n<0) throw "enter positive integer number only";

       
        var binary = new String();
        var b1 = new String();

        while (n > 0) {
            b = n % 2;
            b1 = b1 + b;                //creating binary no
            n = parseInt(n / 2);
        }
        var len = b1.length;           //length of binary no
        //console.log(b1.length);
        for (var i = len - 1; i >= 0; i--) {
            binary = binary + b1.charAt(i);                 //reverse the num
        }                          
        
    }catch(err){
        return err;
    }
    },

    /*convert to Binary using toBinary function
    Swap nibbles and find the new number.
    Find the resultant number is the number is a power of 2.
    */

    SwapNibble(n) {
        try{
            if(n<0) throw "enter positive integer number only";

        let len = n.length;
        var bno = new String;
        bno=n;
         //check length of binary no it should be 8 b'coz 1byte=8bit if not do zero padding
        if (len != 8)                     
        {
            let a = 8 - len;
            for (let i = 0; i < a; i++)            //add padding of zeros
            {
                bno = 0 + bno;
            }
        }
        console.log("Number after padding: " + bno);

        //Swapping of nibbles
        var nibble1 = new String();
        var nibble2 = new String();
        for (let i = 0; i < 8; i++) {
            if (i == 0 || i <= 3) {
                nibble1 = nibble1 + bno.charAt(i);
            }
            else
                nibble2 = nibble2 + bno.charAt(i);
        }
        let swapnibble = nibble2 + nibble1;
        console.log("Binary no after swapping nibbles is: "+swapnibble);
        
        //decimal conversion of binary swapped number

        let deci=0;
        let count=0;
        for (let i = 7; i >= 0; i--) {
        
            let a = swapnibble.charAt(i);
            // console.log(i);
             deci += (a * Math.pow(2 , count));
             count++;
         }
        return deci;
        }catch(err){
            return err;
        }
        
    },
    // Decimal conversion of number after swapping nibbles

    // DecimalConversion(d) {
    //     var num = new String();
    //     num = d;
    //     let deci = 0;
    //     console.log(num);
        
    //     for (let i = 7; i >= 0; i--) {
    //         if(num.charAt(i) == 1)
    //         {
    //         //let a = num.charAt(i);
    //         deci = deci + (1 * Math.pow(2, i));
    //         }
    //     }
    //     return deci;
    // },

    /*
        the square root of a nonnegative integer number c given in the input using Newton's method:
    */
    SquareRoot(c) {
            try{
                if(typeof c!= 'number') throw "only number inputs are valid";

                if(c<0) throw "enter only non negative numbers";

        var epsilon = 1.0e-15;
        var t = c;

        while (Math.abs(t - c / t) > epsilon * t) {
            t = (c / t + t) / 2.0;
        }
        return t;
    }catch(err){
        return err;
    }
    },
    /*reads in three command-line arguments P, Y, and R and calculates the monthly payments
     you would have to make over Y years to pay off a P principal loan amount at R per cent 
    */
    MonthPay(principal, rate, year) {
        try{
            if(typeof principal!= 'number' || typeof rate!= 'number' ||typeof year!= 'number') 
            throw "enter only numbers";

            if(principal<=0 || rate<=0 || year<=0)
                throw "principal, rate, year should be positive value";

        var r = rate / (12 * 100);   //monthly interest rate
        var n = 12 * year;         //no of months

        var payment = (principal * r) / (1 - Math.pow(1 + r, -n));
        var interest = payment * n / principal;

        console.log("Total interest: " + interest);
        return (payment);
        }catch(err){
            return err;
        }

    },

    /*temperature conversion Celsius to Fahrenheit and FahrenheitToCelsius
        works for negative temp values and for only number inputs
    */

    CelsiusToFahrenheit(temp) {
        try{
            if(typeof temp!= 'number') throw "only number inputs are valid";

        var ft = (temp * (9 / 5) + 32);
        return ft;
        }catch(err){
            return err;
        }
    },

    FahrenheitToCelsius(temp) {
        try{
            if(typeof temp!= 'number') throw "only number inputs are valid";

        var ct = (temp - 32) * 5 / 9;
        return ct;
    }catch(err){
        return err;
    }
    },


    /*function that takes a date as input and prints the day of the week that date falls on
    */
    dayofWeek(m, d, y) {
        
        try{
            if(typeof m!= 'number' || typeof d!= 'number' ||typeof y!= 'number') 
            throw "enter only numbers";

            if(m<=0 && m>12 || d<1&&d>31)
                throw "enter value of month between 1-12 and value of day between 1-31";

            if(m<0 || d<0 || y<0)
            throw "only positive numbers are valid";


        let y0 =  parseInt(y - (14 - m) / 12);
        let x =  parseInt(y0 + y0/4 - y0/100 + y0/400);
        let m0 =  parseInt(m + 12 * ((14 - m) / 12) - 2);
        let d0 =  parseInt((d + x + (31*m0)/12) % 7);

        return (d0);

        }catch(err){
            return err;
        }        
    },

    
    //Insertion sort of strings works for only string inputs

    InsertionSort(arr) {
                
        try{
            if(typeof arr!= 'string') throw "only string inputs are valid";

            if(arr.length < 2) throw "not enough data";
        
        let n = arr.length;       //take length of array

        //loop for sorting
        for (let i = 1; i < n; i++) {
            j = i;
            while (j > 0 && arr[j - 1] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }
        return arr;
    }catch(err){
        return err;
    }
    },

    //Bubble sort   

    bubbleSort(arr) {

        try{
            if(typeof arr!= 'number') throw "only number inputs are valid";

            if(arr.length < 2) throw "not enough data";

        let n = arr.length;

        let temp = 0;

        for (i = 0; i < n; i++) {
            for (j = 0; j < n -i- 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // swap the elements
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        } 
        return arr;
    }catch(err){
        return err;
    }
    },


    /* Binary search of string (works for only sorted array) and for string inputs only
    */
    binarySearch(arr, key) {

        try{
            if(typeof arr!= 'string' || key !='string') throw "only string inputs are valid";

            if(arr.length < 1) throw "not enough data";

        let first = 0;
        let last = arr.length - 1;

        while (last >= first) {
            let mid = Math.floor((last + first) / 2);     //find the mid
            if ((key === arr[mid])) {
                return "elememnt is found at index of "+mid;
                break;
            }
            else if (key < arr[mid]) {
                last = mid - 1;
            }
            else {
                first = mid + 1;
            }
        }
        if (first > last) {
            return "element is not found.";
        }
    
    }catch(err){
        return err;
    }

    },

    /** Write a Program to calculate the minimum number of Notes as well as the Notes to be 
     returned by the Vending Machine as a Change
     */
    vendingMachine(amount) {
        try{
            if(typeof amount!= 'number') throw "only number inputs are valid";

            if(amount<0) throw "enter only non negative numbers";

        let one = 0, two = 0;
        let five = 0;
        let ten = 0;
        let fifty = 0;
        let hundered = 0;
        let fh = 0;
        let thousand = 0;
        while (amount > 0) {
            if (amount >= 1000) {
                amount = amount - 1000;
                thousand++;
            }
            else if (amount >= 500 && amount < 1000) {
                amount = amount - 500;
                fh++;
            }
            else if (amount >= 100 && amount < 500) {
                amount = amount - 100;
                hundered++;
            }
            else if (amount >= 50 && amount < 100) {
                amount = amount - 50;
                fifty++;
            }
            else if (amount >= 10 && amount < 50) {
                amount = amount - 10;
                ten++;
            }
            else if (amount >= 5 && amount < 10) {
                amount = amount - 5;
                five++;
            }
            else if (amount >= 2 && amount < 5) {
                amount = amount - 2;
                two++;
            }
            else if (amount == 1) {
                amount = amount - 1;
                one++;
            }
        }

        console.log("Number of Notes as & the Notes to be returned by the Vending Machine as a Change:");
        var totalnotes = thousand + fh + hundered + fifty + ten + five + two + one;
        console.log("Total required notes: " + totalnotes);

        if (thousand != 0)
            console.log("Thousand: " + thousand);
        if (fh != 0)
            console.log("five hundered: " + fh);
        if (hundered != 0)
            console.log("Hundered: " + hundered);
        if (fifty != 0)
            console.log("Fifty: " + fifty);
        if (ten != 0)
            console.log("Ten: " + ten);
        if (five != 0)
            console.log("Five: " + five);
        if (two != 0)
            console.log("Two: " + two);
        if (one != 0)
            console.log("One: " + one);

        return 0;
    }catch(err){
        return err;
    }
    },

    /*
    */

   

}