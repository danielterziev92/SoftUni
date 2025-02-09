function magicSum(array, numb) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result = [];
        for (let ind = i + 1; ind < array.length; ind++) {
            if (array[i] + array[ind] === numb) {
                result.push(array[i], array[ind]);
                break;
            }
        }
        if (result.length > 0) {
            console.log(result.join(' '));
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);