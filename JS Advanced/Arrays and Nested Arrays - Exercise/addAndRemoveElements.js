function addAndRemoveElements(commands) {
    const result = [];
    const allCommands = {
        'add': (x) => result.push(x),
        'remove': (x) => result.pop(),
    }

    let index = 1;
    for (let command of commands) {
        allCommands[command](index);
        index += 1;
    }

    result.length > 0
        ? console.log(result.join('\n'))
        : console.log('Empty')
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add'])