const fs = require("fs");
let input= Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = [];
let i = 1;

while ( i <= input){
  i%2!==0 && String(i)[String(i).length-1] !== '5' && !(i % 3 === 0 && i % 9 !== 0)  && result.push(i)
  i++;
}

console.log(...result)