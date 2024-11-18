const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

=
const result = month => (
  month === 2 ? 28 : ((1 << month) & 0b100111010000 ? 30 : 31)
);

console.log(result(input));