// 입력 및 변수 선언
const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

// 출력
console.log(n[0]>n[1] ? Number(n[0]) : Number(n[1]))