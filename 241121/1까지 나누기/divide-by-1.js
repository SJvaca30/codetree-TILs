const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = input
let i = 1;

while ( i <= result){
  if(input/i <= 1) break;
  input = parseInt(input/i)
  
  i++
}

console.log(i)
