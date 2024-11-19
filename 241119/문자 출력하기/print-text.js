const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()

let result = '';
// let i = 1;

for( let i = 0; i < 8 ;i++){
    result += input
}

console.log(result);

