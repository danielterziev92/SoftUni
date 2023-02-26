function sumDigits(numbers) {
    let result = 0;
    for (let numb of numbers.toString().split('')) {
        result += Number(numb);
    }

    console.log(result);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);