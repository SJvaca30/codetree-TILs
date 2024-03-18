const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


let a = [...input].sort((a,b) => a-b)[0] === input[0] ? 1 : 0;
let b = input.every((element) => element === input[0]) ? 1 : 0;
console.log(a,b)