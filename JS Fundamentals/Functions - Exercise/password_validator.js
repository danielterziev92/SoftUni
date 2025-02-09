function passwordValidator(str) {
    let regex = /((?=(?:\D*\d){2})[a-zA-Z0-9]){6,10}/g;
    if (str.match(regex)) {
        console.log('Password is valid');
    } else {
        if (str.length < 6) {
            console.log('Password must be between 6 and 10 characters');
        } else {
            console.log('Password must consist only of letters and digits')
        }
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');