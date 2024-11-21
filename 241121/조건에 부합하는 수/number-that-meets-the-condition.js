const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = [];
let i = 1;

while ( i <= input){
  !(i%2===0 && i%4!==0) && 
  !(parseInt(i/8)%2===0) && 
  !(i%7<4) && result.push(i);
  i++
}

console.log(...result)
