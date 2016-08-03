'use strict'

const fs = require('fs');

var path =__dirname;

let arr = []; 
let obj ={};
let value; 

fs.readdirSync(path).forEach(function(file){
  if(file.split('.')[1] === "js" && file.split('.')[0]!=="main"){
    value = require('./'+file);
    arr.push(value);
    obj[file] = value;
  }  
});
console.log(arr);
console.log(obj);
