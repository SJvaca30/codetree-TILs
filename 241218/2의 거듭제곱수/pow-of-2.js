const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 0;
while(input !== 2) {
  input = input/2;
  result+=2;
}

console.log(result)