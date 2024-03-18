const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


let a = [...input].sort((a,b) => a-b)[0];
console.log(a)