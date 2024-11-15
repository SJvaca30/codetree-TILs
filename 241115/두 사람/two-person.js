const fs = require("fs");
let [[firstAge, firstSex], [secAge, secSex]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(" "));


  
  // 19세이상이면서 남자

const result =
(firstAge >= 19 && firstSex === "M" && 1) ||
(secAge >= 19 && secSex === "M" && 1) ||
2;

console.log(result)