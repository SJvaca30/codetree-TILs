const fs = require("fs");
let a = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 0;

while ( a <= 100) {
    result+=a
    
    a++
}

console.log(result)