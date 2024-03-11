const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split("\n")

console.log(input[1]+"\n"+input[0])