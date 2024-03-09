const fs = require("fs");

let a = fs.readFileSync(0);
a = Number(a);

console.log(a.toFixed(2))