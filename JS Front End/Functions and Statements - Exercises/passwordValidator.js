function passwordValidator(password) {
    function isLetter(ch) {
        return ch.toLowerCase() !== ch.toUpperCase()
    }

    function isDigit(ch) {
        return !isNaN(ch)
    }

    const result = [];

    if (!(password.length >= 6 && password.length <= 10)) {
        result.push('Password must be between 6 and 10 characters')
    }

    let digits = 0;
    for (let char of password) {
        if (!(isLetter(char) || isDigit(char))) {
            result.push('Password must consist only of letters and digits');
            break;
        }

        if (isDigit(char)) {
            digits += 1;
        }
    }

    if (digits < 2) {
        result.push('Password must have at least 2 digits');
    }

    result.length > 0
        ? console.log(result.join('\n'))
        : console.log('Password is valid')
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');