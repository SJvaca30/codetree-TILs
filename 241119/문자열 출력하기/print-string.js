const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let code = 'LeebrosCode'


let result = code;
let i = 1;

while (i < input) {
  result+='\n'+code
  i++
}

console.log(result);

