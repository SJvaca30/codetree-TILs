const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim())

const getSeason = (month) => {
  return (month >= 3 && month <= 5 && 'Spring') ||
         (month >= 6 && month <= 8 && 'Summer') ||
         (month >= 9 && month <= 11 && 'Fall') ||
         'Winter';
}

console.log(getSeason(input))


