const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]) < Number(input[1]) && Number(input[1]) < Number(input[2]) ? 1 : 0;
console.log(a)