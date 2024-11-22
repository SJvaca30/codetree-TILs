const fs = require("fs");
let input= fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)


let zeroIndex = input.indexOf(0);

let result = input.slice(0,zeroIndex).join('\n')
console.log(result)