function equalNeighbors(arrs) {
    let neighbors = 0;

    for (let row = 0; row < arrs.length; row++) {
        for (let col = 0; col < arrs[row].length; col++) {
            let currentElement = arrs[row][col]
            if (row < arrs.length - 1) {
                let nextRowElement = arrs[row + 1][col]
                if (currentElement === nextRowElement) {
                    neighbors += 1;
                }
            }
            if (col < arrs[row].length - 1) {
                let nextColElement = arrs[row][col + 1]
                if (currentElement === nextColElement) {
                    neighbors += 1;
                }
            }
        }
    }

    return neighbors;
}


console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));