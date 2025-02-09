function sortingNumbers(numbers) {
    const result = [];
    const end = numbers.length
    numbers = numbers.sort((a, b) => a - b);
    for (let i = 0; i < end; i++) {
        if (i % 2 === 0) {
            result.push(numbers.shift());
        } else {
            result.push(numbers.pop());
        }
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);