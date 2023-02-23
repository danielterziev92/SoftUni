function diagonalSums(arrs) {
    const result = Array();

    function sumDiagonal1(rowLength, arrLength, arrs) {
        let col = 0;
        let currentResult = 0;
        for (let row = rowLength; row < arrLength; row++) {
            currentResult += arrs[row][col];
            col += 1;
        }
        return currentResult;
    }

    function sumDiagonal2(rowLength, arrLength, arrs) {
        let col = 0;
        let currentResult = 0;
        for (let row = rowLength; row >= arrLength; row--) {
            currentResult += arrs[row][col];
            col += 1;
        }
        return currentResult;
    }

    result.push(sumDiagonal1(0, arrs.length, arrs));
    result.push(sumDiagonal2(arrs.length - 1, 0, arrs));

    return result.join(' ');
}

console.log(diagonalSums([[20, 40],
    [10, 60]]));
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));