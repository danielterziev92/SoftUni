function wordTracker(text) {
    const [occurrences, ...words] = [...text];
    const wordsOccurrences = {};

    for (let occurrence of occurrences.split(' ')) {
        wordsOccurrences[occurrence] = 0;
    }

    for (let word of words) {
        if (wordsOccurrences.hasOwnProperty(word)) {
            wordsOccurrences[word] += 1;
        }
    }


    const result = Object.entries(wordsOccurrences).sort((a, b) => b[1] - a[1]);


    for (let [word, occurrences] of result) {
        console.log(`${word} - ${occurrences}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);