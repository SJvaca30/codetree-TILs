
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 1;
let prod = 2;

while (true) {

    if (prod === n) {
        break;
    }    
    
    prod *= 2;
    cnt++;
}

console.log(cnt);