function processOddPositions(numbers) {
    const result = [];

    for (let i = 1; i < numbers.length; i += 2) {
        result.push(numbers[i] * 2);
    }

    return result.reverse().join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));