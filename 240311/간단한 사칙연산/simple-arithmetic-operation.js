const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(" ")


let [a, b] = input.map(Number);

console.log(`${a+b}
${a-b}
${parseInt(a/b)}
${a%b}`)