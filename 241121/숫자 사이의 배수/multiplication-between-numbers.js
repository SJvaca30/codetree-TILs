const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(' ')
  .map(Number)

let [c, d] = [0, []];

while ( a <= b){
   (a%5===0 || a%7===0) && (c+=a) && d.push(a);
    a++
}

let avg = 0;
d.forEach(i => avg+=i )

console.log(c, (avg/(d.length)).toFixed(1) )


