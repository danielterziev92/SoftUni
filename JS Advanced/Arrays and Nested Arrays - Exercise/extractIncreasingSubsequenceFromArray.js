function extractIncreasingSubsequenceFromArray(numbs) {
    const result = [];

    let lastNumber = 0;
    for (const numb of numbs) {
        if (numb >= lastNumber) {
            lastNumber = numb;
            result.push(numb);
        }
    }

    return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);