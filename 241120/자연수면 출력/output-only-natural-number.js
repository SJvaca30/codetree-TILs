const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")


let result = '';

if( a>0 ) {
  result = a.repeat(Number(b))
} else {
  result = 0
}

console.log(result)