const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())


  let result = [];
let i = 1

  while (i <= 5) {
    result.push(input*i)
    i++
  }

  console.log(result.join(" "))