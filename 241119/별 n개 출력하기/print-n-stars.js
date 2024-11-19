const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

  let result = '*';
//   let i = 17;

  while (input > 1) {
    result+='\n*'
    input--
  }

  console.log(result)
