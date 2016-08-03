const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite car? ', (answer) => {
  fs.readFile('./data.json',(err, data)=>{
    if(err) return console.log('err: ', err);
    let arr = JSON.parse(data);
    arr.push(answer);
    let value = JSON.stringify(arr);
    fs.writeFile('./data.json', value, err=>{
        if(err){
           console.log('Oh, NO!', err);
        }else{
           console.log('done');
        } 
    });

 });
 rl.close();
});