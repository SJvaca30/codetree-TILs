const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let b = input[1];

let result = (a / b).toString();

let index = result.indexOf('.');

if (index === -1) {
    result += '.';
    index = result.length - 1;
}

while (result.length - index - 1 < 20) {
    result += '0';
}

console.log(result);