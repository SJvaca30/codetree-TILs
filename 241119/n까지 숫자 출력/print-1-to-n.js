const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())



  let result = [];
  let i = 1

  while (i <= input) {
    result.push(i)
    i++
  }

  console.log(result.join(" "))
