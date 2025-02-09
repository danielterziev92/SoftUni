function last_k_numbers_sequence(n, k) {
    function sumOfLastNElements(myArr, k) {
        let result = 0;
        for (let i = myArr.length - 1; i >= 0; i--) {
            result += myArr[i];
            k -= 1;
            if (k === 0) {
                return result;
            }
        }
        return result;
    }

    const myArray = [1,];

    for (let i = 0; i <= n - 2; i++) {
        let sum = sumOfLastNElements(myArray, k);
        myArray.push(sum);
    }

    return myArray;
}

last_k_numbers_sequence(6, 3);
last_k_numbers_sequence(8, 2);