function diff(array1, array2) {
    let diffIndex;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            diffIndex = i;
            break;
        }
    }
    let result = '';
    if (diffIndex !== undefined) {
        result = `Arrays are not identical. Found difference at ${diffIndex} index`
    } else {
        let sum = eval(array1.join('+'))
        result = `Arrays are identical. Sum: ${sum}`
    }
    console.log(result);
}

diff(['10', '20', '30'], ['10', '20', '30']);
diff(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
diff(['1'], ['10']);