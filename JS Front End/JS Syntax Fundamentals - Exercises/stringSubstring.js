function stringSubstring(word, text) {
    let result = text.split(' ').map(x => x.toLowerCase()).includes(word);
    result ? console.log(word) : console.log(`${word} not found!`)
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');