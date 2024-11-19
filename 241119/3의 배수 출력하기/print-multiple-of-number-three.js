const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

  let result = [];
  let i = 1

  while (true) {
    result.push(i*3)
    i++
    if (result[result.length - 1] >= input )break;
    
  }

  console.log(result.join(" "))
