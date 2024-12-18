const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let temp = 0;
let result = 0;
while(temp !== 2) {
  temp = input/2;
  result+=2;
}

console.log(result)