const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let b = input[1];

// 나눗셈 결과를 문자열로 변환하고 소수점 20자리까지 표시
let result = (a / b).toFixed(20);

console.log(result);