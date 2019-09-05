/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node linkedList.js
 *  
 *  Purpose: inventry data management 
 *
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   3-09-2019
 *
 ******************************************************************************/

/**
 * inventry data management 
 *
 * @ Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. 
 *  Calculate the value for every Inventory. 
 */
const utility = require("./Utility.js");
const read = require("readline-sync");

    /* Function for the Input */
    function readInput() {
        let input = read.question();
        return input;
    }


    function inventoryData()
    {
        var fs = require('fs');

    //access .json file
    var data = JSON.parse(fs.readFileSync('/home/user/Desktop/shweta/week3_oops_program/inventryDataManagement.json'));
     console.log(data); 
    // console.log(data.Rice[0].name);  
    
    //  Calculate the value for Rice Inventory 
    
    let rice_val=0, Pulses_val=0, Wheat_val=0;

    for(itr in data.Rice)
    {
        var rval=(data.Rice[itr].weight*data.Rice[itr].price);  
        console.log("value of "+data.Rice[itr].name+" : "+rval);
        rice_val += rval; 
    }
    console.log();
    
    //  Calculate the value for pulse Inventory
        
    for(itr in data.Pulses)
    {
        var pval=(data.Pulses[itr].weight*data.Pulses[itr].price);        
        console.log("value of "+data.Pulses[itr].name+" : "+pval);
        Pulses_val += pval
    }
    console.log();
    
    //  Calculate the value for wheat Inventory
        
    for(itr in data.Wheat)
    {
        var Wval=(data.Wheat[itr].weight*data.Wheat[itr].price);        
        console.log("value of "+data.Wheat[itr].name+" : "+Wval);
        Wheat_val += Wval;
    }
    let total = rice_val + Pulses_val + Wheat_val;
    return total;
    }

/**
 * Address book =>
 * An address book holds a collection of entries, each recording a person's first and last names, 
 * address, city, state, zip, and phone number.
 */
var fs = require('fs');
 class address_Book
 {
    readInput() {
        let input = read.question();
        return input;
    }
   /**
    * Constructor to take the inputs
    *
    * @first_name, last_name, address, city, state, zip, phone_no 
    */
    constructor(first_name, last_name, address, city, state, zip, phone_no)
    {
        this.first_name = first_name
        this.last_name = last_name
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phone_no = phone_no
    }
     /**
    * function to read the json file
    *
    * @ read returns first_name, last_name, address, city, state, zip, phone_no from json file in array
    */
    readJson()
    {
        return JSON.parse(fs.readFileSync("/home/user/Desktop/shweta/week3_oops_program/AddressBook.json"));
    }

    /**
    * function to write into json file
    *
    * @ writeFileSync returns first_name, last_name, address, city, state, zip, phone_no into json file in array
    */
    writeJson(datawrite)
    {
        return fs.writeFileSync("/home/user/Desktop/shweta/week3_oops_program/AddressBook.json", JSON.stringify(datawrite))
    }

    /**
    * function to add data in json file
    *
    * @first_name, last_name, address, city, state, zip, phone_no adds all data into .json file
    */
   
    addData()
    {
        console.log("Enter the first name :")
        let name = this.readInput();
        console.log("Enter the last name : ")
        let lastname = this.readInput();
        console.log("Enter the address : ");
        let addr = this.readInput();
        console.log("Enter the city : ");
        let city = this.readInput()
        console.log("Enter the state : ");
        let state = this.readInput()
        console.log("Enter the zip code : ");
        let zipcode = this.readInput()
        console.log("Enter the phone_no");
        let phone_num = this.readInput();    
        
        let addobj = new address_Book(name, lastname, addr, city, state, zipcode, phone_num );
        // console.log(addobj);
        
        var jsondata = this.readJson();
        // console.log(jsondata);        

        jsondata.push(addobj);
        // console.log(jsondata);
        
       this.writeJson(jsondata)             
    }

    /**
    * function to delete data from json file
    *
    * @person's first_name delets data from .json file
    */
    
    deleteData()
    {
        console.log("Enter the first name : ");        
    }
        
 }

module.exports = {address_Book, readInput, inventoryData}