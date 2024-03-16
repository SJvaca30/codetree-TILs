let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])
let b = Number(input[1])
let aa = "";
let bb = "";

a < b ? aa = 1 : aa = 0;

a === b ? bb = 1 : bb = 0;

console.log(aa+" "+bb)