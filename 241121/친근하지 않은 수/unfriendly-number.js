const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())


let result = 0;
let i =1;

while (i <=input){
    i%2!==0 &&  i%3!==0 && i%5!==0 && result++;

    i++
}
console.log(result)