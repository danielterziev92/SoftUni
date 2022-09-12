function solve(string, word) {
    string = string.split(' ');
    let count = 0;
    while (string.includes(word)) {
        count++
        string[string.indexOf(word)] = '';
    }
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');