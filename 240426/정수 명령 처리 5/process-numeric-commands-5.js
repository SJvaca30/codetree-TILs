const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = [];

const n = parseInt(input[0]);
for(let i = 1; i <= n; i++) {
    const command = input[i].split(' ');
    switch(command[0]) {
        case 'push_back':
            arr.push(parseInt(command[1]));
            break;
        case 'pop_back':
            arr.pop();
            break;
        case 'size':
            console.log(arr.length);
            break;
        case 'get':
            console.log(arr[parseInt(command[1])-1]);
            break;
    }
}