const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let a = 0;
let b = 0;
let c = 0;

let i = 1;
while ( i <= input){
    i%12 === 0 && c++ ||
    i%3 === 0 && b++ ||
    i%2 === 0 && a++;
    console.log(i,a, b, c)
    i++
}

console.log(a+' '+b+' '+c)
