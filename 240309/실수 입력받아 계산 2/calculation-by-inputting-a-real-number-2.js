const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

console.log((input+1.5).toFixed(2))