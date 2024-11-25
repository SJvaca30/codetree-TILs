const fs = require("fs");
let input= fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)

let result = [];
let num = 0;

result = input.reduce((acc,i) => {
    if (i<30){
        num++
        return acc+i
    }
    return acc;
},0)

console.log((result/num).toFixed(2))