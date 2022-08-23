function condense(array) {
    let condensed = array;
    while (condensed.length > 1) {
        condensed = [];
        for (let i = 0; i < array.length - 1; i++) {
            condensed.push(array[i] + (array[i + 1] || 0))
        }
        array = condensed;
    }
    console.log(condensed.toString())
}

condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);