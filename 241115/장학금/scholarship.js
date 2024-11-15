const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let midterm = input[0];
let final = input[1];

let result = function () {
  if (midterm >= 90) {
    return (
      (final >= 95 && 100000) ||
      (final >= 90 && final <= 94 && 50000) ||
      (final <= 89 && 0)
    );
  } else {
    return 0
  }
};

console.log(result());
