const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number)

let result = 1;

while ( a <= b){
  result*=a;
  a++
}

console.log(result)