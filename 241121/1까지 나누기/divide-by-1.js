const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let N = input;
let i = 1;

while (true){
  if(N/i <= 1) break;
  N = parseInt(N/i)
  
  i++
}

console.log(i)
