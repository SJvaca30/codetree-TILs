const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number)

let result = 1;
let i = 1;

while ( i <= b){
  i%a===0 && (result*=i)
  i++
}

console.log(result)