const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let n = input[1];
let add = a+n;
let result = add;

for ( let i = 1; i<n ;i++){
    result+='\n'
    add += n;
    result+=add;
    
}
console.log(result)
