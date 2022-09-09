function solve(array){
    let occurrences = {};

    for (let word of array){
        if (occurrences.hasOwnProperty(word)){
            occurrences[word] += 1;
        } else {
            occurrences[word] = 1;
        }
    }

    let result = Array.from(Object.entries(occurrences));
    result.sort((a, b) => b[1] - a[1])
    result.forEach(value => console.log(`${value[0]} -> ${value[1]} times`));
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);