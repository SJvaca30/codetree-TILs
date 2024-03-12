// 입력 및 변수 선언
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

// 출력
if (n>=80) {
    console.log("pass")
} else {console.log(80-n,"more score")}