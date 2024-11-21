const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)

let [result, avg] = [0, []];

while ( a <= b){
    if ( a%6===0 && a%8!==0){
        result+=a
    }
    
    a++
}

console.log(result)