function calculate(numb1, operator, numb2){
    let result = 0;
    if(operator === '+'){
        result = numb1 + numb2
    } else if(operator === '-'){
        result = numb1 - numb2
    } else if (operator === '/'){
        result = numb1 / numb2
    } else if (operator === '*'){
        result = numb1 * numb2
    }
    console.log(result.toFixed(2))
}

calculate(5, '+', 10);
calculate(25.5, '-', 3);