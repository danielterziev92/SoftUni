function solve(inputArray) {
    let array = inputArray.shift().split(' ');
    array = array.map(value => Number(value));
    for(let i = 0; i < inputArray.length; i++){
        let commands = inputArray[i].split(' ');
        let currentCommand = commands[0];
        if(currentCommand === 'Add'){
            let currentValue = Number(commands[1]);
            array.push(currentValue);
        } else if( currentCommand === 'Remove'){
            let currentValue = Number(commands[1]);
            let index = array.indexOf(currentValue);
            for(let i = 0; i < array.length; i++){
                if(array[i] === currentValue){
                    array.splice(i, 1);
                }
            }
        } else if( currentCommand === 'RemoveAt'){
            let index = Number(commands[1]);
            array.splice(index, 1);
        } else if( currentCommand === 'Insert'){
            let currentValue = Number(commands[1]);
            let currentIndex = Number(commands[2]);
            array.splice(currentIndex, 0, currentValue);
        }
    }
    console.log(array.join(' '));
}

// solve(['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3'])

solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])