const fs = require('fs');

const input = fs.readFileSync(0).toString().split(" ");

let a = input[0];
let b = input[1];

[a, b] = [b, a];


console.log(a, b)