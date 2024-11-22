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
    if(number%2===0){
        result.push(parseInt(number/2))
    }
    if (result.length === 3) break;

    index++
}

console.log(result.join('\n'))