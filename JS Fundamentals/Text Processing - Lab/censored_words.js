function solve(sentence, word) {
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length))
    }
    console.log(sentence)
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');