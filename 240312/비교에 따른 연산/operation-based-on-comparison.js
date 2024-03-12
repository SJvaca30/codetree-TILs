// 입력 및 변수 선언
const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0])
let b = Number(n[1])
// 출력

if (a>b) {
    console.log(a*b)
} else {parseInt(b/a)}