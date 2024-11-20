const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)




let result = input.filter(i=> 
    i%3===0 && i%2!==0
    
)

console.log(result.join('\n'))
