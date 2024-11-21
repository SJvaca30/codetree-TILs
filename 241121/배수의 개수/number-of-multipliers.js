const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)

let [three, five] = [0, 0]

  input.forEach(i=> {
    if(i%3 === 0)three++
    if(i%5 === 0)five++
    })

  console.log(three +' '+ five)