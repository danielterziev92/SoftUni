function evenAndOddSubtraction(arr) {
    let oddNumbers = [];
    let evenNumber = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i])
        } else {
            evenNumber.push(arr[i])
        }
    }

    const oddSumNumbers = oddNumbers.reduce((x, y) => x + y, 0);
    const evenSumNumbers = evenNumber.reduce((x, y) => x + y, 0);
    console.log(evenSumNumbers - oddSumNumbers);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);