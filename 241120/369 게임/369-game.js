const fs = require("fs");
let a = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let i = 1;
let result = [];

while ( i <= a) {
    (i % 3 === 0 || String(i).includes("3"||"6"||"9")) && 
    result.push(0) ||
    result.push(i)
    i++
}

console.log(result.join(' '))