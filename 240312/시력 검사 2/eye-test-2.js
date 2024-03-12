// 입력 및 변수 선언
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a>=1) {
    console.log("High")
} else if (a>=0.5 && a<1) {
    console.log("Middle")
} else { console.log("Low")}