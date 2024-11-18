const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)


  let result = [];
let start = input[0];
let end = input[1];

  while (start <= end) {
    if ( start % 2 === 0) {
    start++
    } else {
        result.push(start);
        start+=2
    }
  }

  console.log(result.join(" "))