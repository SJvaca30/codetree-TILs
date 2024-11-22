const fs = require("fs");
let input= fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)


let index = 0;
let number = input[index];
let result =[];


while (true) {
    number = input[index];
    if(number < 25){
        result.push("Higher")
    }
    if(number > 25){
        result.push("Lower")
    }
    if(number === 25) {
        result.push("Good")
        break;
    }

    index++
}

console.log(result.join('\n'))