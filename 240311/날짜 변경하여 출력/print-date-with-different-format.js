const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(".")

console.log(input[1]+"-"+input[2]+"-"+input[0])