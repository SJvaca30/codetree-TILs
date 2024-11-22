const fs = require("fs");
let input= fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)


let index = 0;
let result =[];


while (true) {
    let number = input[index];
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