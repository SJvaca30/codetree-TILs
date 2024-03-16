let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = input[1];

if (a>=b) {
    console.log(1)
} else {
    console.log(0)
}
if (a>b) {
    console.log(1)
} else {
    console.log(0)
}
if (a<=b) {
    console.log(1)
} else {
    console.log(0)
}
if (a<b) {
    console.log(1)
} else {
    console.log(0)
}
if (a===b) {
    console.log(1)
} else {
    console.log(0)
}
if (a!==b) {
    console.log(1)
} else {
    console.log(0)
}