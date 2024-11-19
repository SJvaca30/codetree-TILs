const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim());

let result = [];
let i = 1;

while (i * 3 <= input) {
    result.push(i * 3);
    i++;
}

console.log(result.join(" "));