function login(text) {
    const [user, ...passwords] = text;
    const username = user.split('').reverse().join('');
    let trying = {times: 0, is_banned: false};


    for (let pass of passwords) {
        if (pass === username) {
            console.log(`User ${user} logged in.`)
        } else {
            if (trying.times ===  3) {
                console.log(`User ${user} blocked!`)
                trying.is_banned = true;
            }

            if (trying.is_banned) {
                break
            }
            console.log(`Incorrect password. Try again.`)
            trying.times += 1
        }


    }
}

// login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);