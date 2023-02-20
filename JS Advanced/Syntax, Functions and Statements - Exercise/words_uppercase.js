function words_uppercase(sentence) {
    let final = Array()

    let pattern = /\w+/gm;
    let words = sentence.match(pattern);
    if (words) {
        for (let word of words) {
            final.push(word.toUpperCase());
        }
    }

    console.log(final.join(', '));
}

words_uppercase('Hi, how are you?');
words_uppercase('hello');
words_uppercase('Functions in JS can be nested, i.e. hold other functions');
words_uppercase('? ');