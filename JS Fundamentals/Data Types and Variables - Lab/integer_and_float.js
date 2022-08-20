function typeOfNumber(numb1, numb2, numb3){
    let sum = numb1 + numb2 + numb3
    let typeOfSum = '';
    if (sum % 1 === 0){
        typeOfSum = 'Integer';
    } else {
        typeOfSum = 'Float'
    }
    console.log(`${sum} - ${typeOfSum}`);
}

typeOfNumber(9, 100, 1.1);
typeOfNumber(100, 200, 303);