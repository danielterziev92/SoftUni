function firstAndLastKNumbers(array) {
    let k = array.shift();
    console.log(array.slice(0, k).join(' '));
    console.log(array.slice(-k).join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);