const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)

let result = 0;

input.slice(1).forEach( i => i%2 !== 0 && i%3 === 0 && (result+=i))


console.log(result)