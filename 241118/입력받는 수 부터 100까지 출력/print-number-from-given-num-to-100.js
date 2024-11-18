const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = []

  while ( input <= 100) {
    result.push(input)
    input++
  }

  console.log(result.join(" "))