// 입력 및 변수 선언
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a>=3000) {
    console.log("book")
} else if (a>=1000 && a<3000) {
    console.log("mask")
} else { console.log("no")}