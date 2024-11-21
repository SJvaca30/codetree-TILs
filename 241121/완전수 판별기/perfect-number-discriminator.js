const fs = require("fs");
let input = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = 0;
let temp = new Set();

for ( let i = 1; i<=input;i++){
    if(input%i===0){
      temp.add(i)
    }
}
[...temp].forEach(i=>result+=i)

result-input == input ? console.log("P"):console.log("N")