const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())



const result = (month) => (
  (month === 2 && 28) ||
  ((month === 4 || month === 6 || month === 9 || month === 11) && 30) ||
  31
);


console.log(result(input))