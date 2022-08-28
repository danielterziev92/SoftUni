function check(numb1, numb2, numb3) {
    let result = '';
    let multiplication = numb1 * numb2 * numb3;
    if (multiplication < 0) {
        result = 'Negative';
    } else {
        result = 'Positive';
    }
    return result;
}

console.log(check(5, 12, -15));
console.log(check(-6, -12, 14));