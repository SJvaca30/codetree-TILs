const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number)

if ( a>b){
    [b,a] = [a,b]
}

let result = 0;

while ( a<=b){
    a%2===0 && (result+=a)
    a++
}

console.log(result)
