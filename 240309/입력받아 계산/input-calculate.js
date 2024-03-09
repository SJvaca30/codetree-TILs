const fs = require("fs");
// 파일 입출력 모듈 filesystem을 불러왔다. 

let input= fs.readFileSync(0).toString();

console.log(`${Number(input)+2}`);