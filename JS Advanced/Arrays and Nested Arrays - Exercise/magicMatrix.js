function magicMatrix(matrix) {
    const result = [];

    for (let row = 0; row < matrix.length; row++) {
        let sumRows = 0;
        let sumCols = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sumRows += matrix[row][col];
            sumCols += matrix[col][row];
        }
        result.push(sumRows);
    }


    console.log(result.every(item => result.indexOf(item) === 0))
}

magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

magicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);