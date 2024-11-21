const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)

  let result = 0;

  input.forEach(i => i % 2 !== 0 && result++)


console.log(result)