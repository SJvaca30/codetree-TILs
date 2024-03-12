// 입력 및 변수 선언
const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");
let kg = Number(n[1])
let m = (Number(n[0])/100)**2
let bmi = parseInt(kg/m)
// 출력

if (bmi>=25) {
    console.log(bmi+"\n"+"Obesity")
} else { console.log(bmi)}