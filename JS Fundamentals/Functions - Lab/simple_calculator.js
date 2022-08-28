function calculator(numb1, numb2, operator) {
    let result = 0;
    if (operator === 'multiply') {
        result = numb1 * numb2;
    } else if (operator === 'divide') {
        result = numb1 / numb2;
    } else if (operator === 'add') {
        result = numb1 + numb2;
    } else if (operator === 'subtract') {
        result = numb1 - numb2;
    }
    return result;
}

console.log(calculator(5, 5, 'multiply'));
console.log(calculator(40, 8, 'divide'));
console.log(calculator(12, 19, 'add'));
console.log(calculator(50, 13, 'subtract'));