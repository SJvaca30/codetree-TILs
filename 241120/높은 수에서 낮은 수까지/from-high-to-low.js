const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)

let [big, small] = a > b ? [a, b] : [b, a];
// let small = Math.min(a, b);
// let big = Math.max(a, b);

let result = [];
while (big >= small){
     result.push(big)
      big--
 }

console.log(result.join(' '))