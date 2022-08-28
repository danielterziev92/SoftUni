function repeatingString(string, numb) {
    let result = '';
    for (let i = 0; i < numb; i++) {
        result += string
    }
    return result;
}

console.log(repeatingString('abc', 3));
console.log(repeatingString('String', 2));