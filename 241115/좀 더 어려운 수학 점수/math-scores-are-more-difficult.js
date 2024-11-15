const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i)=> i.split(" "));

let mathA = input[0][0]
let engA = input[0][1]
let mathB = input[1][0]
let engB = input[1][1]

if ( mathA > mathB) {
    console.log("A")
}
if ( mathA < mathB) {
    console.log("B")
}
if ( mathA === mathB){
    if (engA > engB) {
        console.log("A")
    }
    if (engA < engB) {
        console.log("B")
    }
}
