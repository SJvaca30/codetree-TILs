const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input.map((k,l)=>(Number(l)%2===0 ? Number(k)+8 : Number(k)*3));

console.log(`${a}
${b}
${a*b}`)