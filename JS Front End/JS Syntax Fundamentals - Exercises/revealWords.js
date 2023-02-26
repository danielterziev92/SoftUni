function revealWords(words, text) {
    words = words.length === 1 ? words : words.split(', ');
    while (text.includes('*')) {
        let currentWord = words.shift()
        let secretWord = '*'.repeat(currentWord.length)
        text = text.replace(secretWord, currentWord);
    }

    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');