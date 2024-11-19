const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())


  let result = [];
  let i = 17;

  while (i > 5) {
    result.push(i)
    i--
  }

  console.log(result.join(" "))
