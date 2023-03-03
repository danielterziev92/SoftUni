function reverseAnArrayOfNumbers(numb, arr) {
    console.log(arr.slice(0, numb).reverse().join(' '))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);