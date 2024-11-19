const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)

let a = input[0];
let b= input[1];


let result = [];
// let i = 1;

while (a <= b) {
  a % 2 === 0 && result.push(a)
  a++
}

console.log(result.join(" "));

