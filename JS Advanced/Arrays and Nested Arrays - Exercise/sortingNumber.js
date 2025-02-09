function sortingNumber(numbs) {
    const result = [];
    numbs.sort((a, b) => a - b);
    const endIndex = numbs.length
    for (let i = 0; i < endIndex; i++) {
        if (i % 2 === 0) {
            result.push(numbs.shift());
        } else {
            result.push(numbs.pop());
        }
    }
    return result;
}

console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));