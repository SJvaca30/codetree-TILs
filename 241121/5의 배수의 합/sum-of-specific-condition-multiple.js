const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number)

let result = 0;

while ( a<=b){
    a%5===0 && (result+=a)
    a++
}

console.log(result)
