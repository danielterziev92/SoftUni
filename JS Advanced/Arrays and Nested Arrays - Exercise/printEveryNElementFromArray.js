function printEveryNElementFromArray(arr, numb) {
    const result = [];
    for (let i = 0; i < arr.length; i += numb) {
        result.push(arr[i]);
    }
    return result;
}

printEveryNElementFromArray(['5',
        '20',
        '31',
        '4',
        '20'],
    2);

printEveryNElementFromArray(['dsa',
        'asd',
        'test',
        'tset'],
    2);

printEveryNElementFromArray(['1',
        '2',
        '3',
        '4',
        '5'],
    6);