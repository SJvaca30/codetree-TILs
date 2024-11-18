const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")


console.log(input.sort((a,b) => a-b)[1])

  