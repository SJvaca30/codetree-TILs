const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number)



let [add, num] = [0, []]

input.forEach(i => {
    if( i>=0 && i<=200){
    add+=i;
    num.push(i)

    }
})

let avg= (add/num.length).toFixed(1)



console.log(add, avg)
