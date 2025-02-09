function subtractions(array) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    let result = (eval(evenArray.join('+')) || 0) - (eval(oddArray.join('+')) || 0)
    console.log(result);
}

subtractions([1, 2, 3, 4, 5, 6]);
subtractions([3, 5, 7, 9]);
subtractions([2, 4, 6, 8, 10]);