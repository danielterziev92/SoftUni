function addAndSubtract(x, y, z) {
    function sum(x, y) {
        return x + y
    }

    const result = sum(x, y) - z;

    console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(43, 58, 100);