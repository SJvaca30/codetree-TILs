const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = [];

for (let i = 1; i <= input; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        a.push(1)
    } else {
        a.push(0)
    }
}



console.log(a.join(' '))