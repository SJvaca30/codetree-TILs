const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number)

let result = 0;

while ( a <= b){
    if ( a%6===0 && a%8!==0){
        result+=a
    }
    a++
}

console.log(result)