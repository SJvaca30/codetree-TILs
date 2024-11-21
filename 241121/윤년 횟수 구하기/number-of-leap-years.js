const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())


let i = 1;
let result = 0;

while ( i <= input) {
    i % 100 === 0 && i % 400 !== 0 ||
    i % 4 !== 0 ||
    result++
    
    i++
}

console.log(result)