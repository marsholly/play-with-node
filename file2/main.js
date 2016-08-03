'use strict'

const fs = require('fs');

function createDirectory(name){
  fs.mkdir('./'+name, 0o777, function(err){
    if(err){
      console.log(err);
    }else{
      console.log('done!');
    }
  });
}


