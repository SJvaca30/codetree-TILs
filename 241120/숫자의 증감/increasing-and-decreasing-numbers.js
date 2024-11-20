const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")

let c = input[0];
let n = Number(input[1]);
let result = [];

let i = 1;
if ( c === 'A'){
    while (i<=n){
        result.push(i)
        i++
    }
};

if ( c === 'D'){
    while (i<=n){
        result.push(n)
        n--
    }
};

console.log(result.join(' '))