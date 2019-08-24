const util=require('../Utility/Utility.js');

var p = process.argv[2];
var r = process.argv[3];
var y = process.argv[4];

var pay=util.MonthPay(p , r , y);
console.log("Monthly payment: "+pay);



