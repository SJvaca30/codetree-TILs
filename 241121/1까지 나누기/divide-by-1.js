const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let num = input;
let count = 0;

while (num > 1) { 
    count++;
    num = Math.floor(num / count); 
}

console.log(count);