const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 1;
let i = 1;

while ( i <= input){
  result*=i;
  if(result >= input) break;
  
  i++
}

console.log(i)
