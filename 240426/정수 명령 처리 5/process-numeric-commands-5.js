function processCommand(array, command) {
    const [operation, value] = command.split(' ');

    switch (operation) {
        case 'push_back':
            array.push(parseInt(value));
            break;
        case 'pop_back':
            array.pop();
            break;
        case 'size':
            console.log(array.length);
            break;
        case 'get':
            console.log(array[parseInt(value) - 1]);
            break;
    }
}

function processCommands(commands) {
    const array = [];
    for (let command of commands) {
        processCommand(array, command);
    }
}


const commands = [
    'push_back 10',
    'push_back 20',
    'get 1',
    'get 2',
    'size',
    'pop_back',
    'size',
    'get 1',
    'size'
];
processCommands(commands);