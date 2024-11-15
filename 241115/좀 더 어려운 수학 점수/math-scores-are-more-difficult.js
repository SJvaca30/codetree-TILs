const fs = require("fs");
const [[mathA, engA], [mathB, engB]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(line => line.split(" ").map(Number));

const result = 
  (mathA > mathB && "A") ||
  (mathA < mathB && "B") ||
  (engA > engB && "A") ||
  (engA < engB && "B") ||
  ""; 

console.log(result);