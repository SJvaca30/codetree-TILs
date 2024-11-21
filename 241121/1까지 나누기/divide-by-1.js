const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 0;
let i = 1;

while ( i <= input){
  if(input/i <= 1) break;
  input = parseInt(input/i)
  
  i++
}

console.log(i)
