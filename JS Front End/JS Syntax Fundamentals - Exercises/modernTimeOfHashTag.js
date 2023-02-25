function modernTimeOfHashTag(text) {
    let result = text.match(/#[A-Za-z]+/gm);
    for (let word of result) {
        console.log(word.slice(1));
    }
}

modernTimeOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimeOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');