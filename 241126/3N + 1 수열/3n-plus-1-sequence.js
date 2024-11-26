const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 0;

while(true){
    if (input === 1) break;
    input%2 ===0 && (input/=2) ||
    input%2 !==0 && (input=input*3+1);
    result++
}

console.log(result)