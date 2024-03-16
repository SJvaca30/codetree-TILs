let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])
let b = Number(input[1])

if (a % 2 === 0) {
    a = "even"
}
else {
    a = "odd"
}

if (b % 2 === 0) {
    b = "even"
}
else {
    b = "odd"
}

console.log(a+"\n"+b);