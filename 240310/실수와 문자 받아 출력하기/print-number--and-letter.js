const fs = require('fs')

const input = fs.readFileSync(0).toString().split("\n")

console.log(`${input[0]}
${Number(input[1]).toFixed(2)}
${Number(input[2]).toFixed(2)}`)