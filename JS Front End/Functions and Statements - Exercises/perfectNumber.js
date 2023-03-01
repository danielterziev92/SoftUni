function isPerfectNumber(numb) {
    let result = [];
    for (let i = 1; i < numb; i++) {
        if (numb % i === 0) {
            result.push(i);
        }
    }
    let divisors = eval(result.join('+'));
    divisors === numb
        ? console.log('We have a perfect number!')
        : console.log('It\'s not so perfect.');
}

isPerfectNumber(2);