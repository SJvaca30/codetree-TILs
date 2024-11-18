const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(i=>i.split(' '));

let result = 0;
  
for ( let i = 0; i <3; i++){
    input[i][0] === 'Y' && input[i][1] >= 37 && result++
    
        
        
    
}
  

result >= 2 ? console.log("E") : console.log("N")