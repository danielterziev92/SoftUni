function sumDigits(numb){
    let currentNumber = numb.toString()
    let result = 0;
    for (let i = 0; i < currentNumber.length; i++){
        result += Number(currentNumber[i]);
    }
    console.log(result);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);