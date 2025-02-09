function solve(array) {
    let words = {};
    for (let word of array.shift().split(' ')){
        words[word] = 0;
    }

    for (let word of array){
        if (words.hasOwnProperty(word)){
            words[word] += 1;
        }
    }

    let result = Array.from(Object.entries(words));
    result.sort((a,b) => b[1] - a[1]);
    for (let [word,count] of result){
        console.log(`${word} - ${count}`);
    }
}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);