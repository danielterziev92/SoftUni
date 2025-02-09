function oddOccurrences(text) {
    const results = {};
    const finalResult = [];

    for (const word of text.split(' ')) {
        if (!results.hasOwnProperty(word.toLowerCase())) {
            results[word.toLowerCase()] = 0;
        }
        results[word.toLowerCase()] += 1;
    }

    for (const [word, count] of Object.entries(results).sort((a, b) => b[1] - a[1])) {
        if (count % 2 !== 0) {
            finalResult.push(word)
        }
    }

    console.log(finalResult.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');