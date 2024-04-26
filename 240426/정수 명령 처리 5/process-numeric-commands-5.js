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