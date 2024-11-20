const fs = require("fs");
let a = Number(fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim())

let result = [];

for ( let i = a; a <= 100; a++){
    if (a >= 90){
        result.push('A');
        continue;
    }
    if (a >= 80){
        result.push('B');
        continue;
    }
    if (a >= 70){
        result.push('C');
        continue;
    }
    if (a >= 60){
        result.push('D');
        continue;
    } else {
        result.push('F');
    }
}


console.log(result.join(' '))