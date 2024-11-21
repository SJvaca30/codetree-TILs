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
    if (i % 12 === 0) {
        c++;
    } else if (i % 3 === 0) {
        b++;
    } else if (i % 2 === 0) {
        a++;
    }
    i++;
}

console.log(a+' '+b+' '+c)
