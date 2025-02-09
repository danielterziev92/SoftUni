function verification(input) {
    let username = input[0];
    let count = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === username.split('').reverse().join('')) {
            console.log(`User ${username} logged in.`);
        } else {
            if (count === 3) {
                console.log(`User ${username} blocked!`)
            } else{
                console.log('Incorrect password. Try again.');
            }
            count += 1;
        }
    }
}

verification(['Acer', 'login', 'go', 'let me in', 'recA']);
verification(['momo', 'omom']);
verification(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);