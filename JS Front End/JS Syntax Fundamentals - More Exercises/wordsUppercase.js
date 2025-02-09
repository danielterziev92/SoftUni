function wordsUppercase(text) {
    const result = [];
    text.match(/\w+/gm).map((x) => result.push(x.toUpperCase()));
    console.log(result.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');