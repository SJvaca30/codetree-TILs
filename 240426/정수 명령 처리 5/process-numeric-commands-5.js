const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let arr = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
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
    process.exit();
});