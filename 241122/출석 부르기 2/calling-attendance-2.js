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
    if(number ===1){
        result.push("John")
    }else if(number ===2){
        result.push("Tom")
    }else if(number ===3){
        result.push("Paul")
    }else if(number ===4){
        result.push("Sam")
    }else{
        result.push("Vacancy")
        break;
    }

    index++
}

console.log(result.join('\n'))