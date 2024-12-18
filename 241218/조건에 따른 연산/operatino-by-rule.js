const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 0;


while (input <= 1000) {
    input%2===0 ? input = (input*3)+1 : input = (input*2)+2;
    result++
}


console.log(result)