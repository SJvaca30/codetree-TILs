const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let N = input;
let i = 1;

while (true){
  if(input/i <= 1) break;
  input = parseInt(input/i)
  
  i++
}

console.log(i)
