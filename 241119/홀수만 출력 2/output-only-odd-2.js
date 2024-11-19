const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let b = input[1];

  let result = [];
//   let i = 17;

  while (a >= b) {
    (a % 2 === 0 && a--) ||
    (result.push(a) && (a-=2) )
    
  }

  console.log(result.join(" "))

