const fs = require("fs");
let input= fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)

let result = 0
let num = 0;

for( let i = 0; i < input.length; i++){
    if (input[i] >= 30){
        break;
    }
    result += input[i]
    num++
}

console.log((result/num).toFixed(2))