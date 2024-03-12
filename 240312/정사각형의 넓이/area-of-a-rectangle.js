// 입력 및 변수 선언
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

// 출력
if (n<5) {
    console.log(n**2+"\n"+"tiny")
} else {console.log(n**2)}