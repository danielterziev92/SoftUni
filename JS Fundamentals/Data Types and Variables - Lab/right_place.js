function place(word, char, match) {
    let newWord = word.replace("_", char);
    if (newWord === match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

place('Str_ng', 'I', 'Strong');
place('Str_ng', 'i', 'String');