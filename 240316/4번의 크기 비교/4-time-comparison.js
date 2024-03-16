let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");


let a = Number(input[0]);
let b = input[1].split(" ")

// [3, [1, 2, 3, 4]]

for ( let i = 0; i < b.length; i++ ){
    if (a > b[i]) {
        console.log(1)
    } else {
        console.log(0)
    }
}