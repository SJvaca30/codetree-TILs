const fs = require("fs");
const [start, end] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const numbers = [];
let sum = 0;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0 || i % 7 === 0) {
    numbers.push(i);
    sum += i;
  }
}

const average = numbers.length ? (sum / numbers.length).toFixed(1) : 0;

console.log(sum, average);