function countStringOccurrences(text, word) {
    let count = 0;

    for (let char of text.split(' ')) {
        if (char === word) {
            count++;
        }
    }

    console.log(count)
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');