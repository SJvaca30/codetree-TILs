const fs = require("fs");

let input = fs.readFileSync(0).toString().trim()

if (input >= 3000) {
    console.log("book");
}
else if (input >1000 && input <= 3000) {
    console.log("mask");
}
else if (input >500 && input <=1000) {
    console.log("pen");
}
else if (input <= 500) {
    console.log("no");
}