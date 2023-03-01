function nXnMatrix(n) {
    for (let x = 0; x < n; x++) {
        const result = [];
        for (let y = 0; y < n; y++) {
            result.push(n);
        }
        console.log(result.join(' '));
    }
}

nXnMatrix(3);
nXnMatrix(7)