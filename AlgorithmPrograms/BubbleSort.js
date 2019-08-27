const util=require('../Utility/Utility.js');

var arr=new Array();
var a=new Array();

arr=util.oneDarray();
console.log(arr);

for (let i=0;i<arr.length; i++)
{
    a[i]=parseInt(arr[i]);
}

var bs=util.bubbleSort(a);
console.log(bs);

