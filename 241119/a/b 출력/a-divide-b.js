const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let b = input[1];

let result = (BigInt(a) * BigInt(10**20)) / BigInt(b);
console.log(`${String(result).padStart(21, '0').slice(0, -20)}.${String(result).padStart(21, '0').slice(-20)}`);