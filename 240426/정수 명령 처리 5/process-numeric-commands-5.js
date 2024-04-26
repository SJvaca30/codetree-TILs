const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = [];

const n = parseInt(input[0]);
for(let i = 1; i <= n; i++) {
    const command = input[i].split(' ');
    if (command[0] === 'push_back') {
        arr.push(parseInt(command[1]));
    } else if (command[0] === 'pop_back') {
        arr.pop();
    } else if (command[0] === 'size') {
        console.log(arr.length);
    } else if (command[0] === 'get') {
        console.log(arr[parseInt(command[1])-1]);
    }
}