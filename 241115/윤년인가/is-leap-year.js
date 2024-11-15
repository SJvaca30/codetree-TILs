const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())


let result = (
    input % 4 === 0 && "true" ||
    "false"
)

console.log(result)