const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())


let result = [];
// let i = 1;

while (1 <= input) {
  result.push(input)
  input--
}

console.log(result.join(" "));

