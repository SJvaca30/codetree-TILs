let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])
let b = Number(input[1])

a < b ? console.log("1 0") : console.log("0 1")