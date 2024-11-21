const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)

let [result, avg] = [0, []];
let numbers = input.slice(1)

numbers.forEach(i => {
    result+=i;
})

console.log(result, (result/(numbers.length)).toFixed(1))