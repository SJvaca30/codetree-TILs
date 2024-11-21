const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let num = input; 
let i = 1;

while (true) {
  if (num / i <= 1) break;
  num = Math.floor(num / i); 
  i++;
}

console.log(i);