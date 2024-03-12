// 입력 및 변수 선언
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a<0) {
    console.log("ice")
} else if (a>=100) {
    console.log("vapor")
} else { console.log("water")}