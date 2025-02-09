function printEveryNthElementFromAnArray(input, numb) {
    let result = [];
    for (let i = 0; i < input.length; i += numb) {
        result.push(input[i]);
    }

    return result
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);