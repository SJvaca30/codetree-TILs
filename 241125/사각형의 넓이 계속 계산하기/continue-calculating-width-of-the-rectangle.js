const fs = require("fs");
let input= fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(i=>i.split(' '))

let result = [];
let length = input.length

for( let i= 0; i<length; i++ ) {
  let temp = '';
  temp = input[i].filter(i => typeof(Number(i))==='number' )
  result.push(Number(temp[0])*Number(temp[1]))
  
  
}

console.log(result.join('\n'))


