const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);



  // 남 = 0, 여 = 1
  // 19세이상 = 성인

  
  let sex = input[0]
  let age = input[1]

  let result = (
    (sex === 0 && age >= 19 && "MAN") ||
    (sex === 1 && age >= 19 && "WOMAN") ||
    (sex === 0 && age < 19 && "BOY") ||
    (sex === 1 && age < 19 && "GIRL")
  )

  console.log(result)