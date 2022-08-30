function addAndSubtract(numb1, numb2, numb3) {
    let result = subtractTwoNumber(numb1, numb2, numb3);
    function sumTwoNumber(numb1, numb2) {
        return numb1 + numb2;
    }
    function subtractTwoNumber(numb1, numb2, numb3) {
        return  sumTwoNumber(numb1, numb2) - numb3;
    }
    return result;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));