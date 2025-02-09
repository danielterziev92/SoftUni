function solve(string) {
    let result = new Map();

    for (let word of string.split(' ')) {
        word = word.toLowerCase();
        if (result.has(word)) {
            let oldResult = result.get(word);
            result.set(word, oldResult + 1);
        } else {
            result.set(word, 1);
        }
    }

    let finalResult = [];
    for (let [word, count] of result){
        if (count % 2 !== 0){
            finalResult.push(word);
        }
    }
    console.log(finalResult.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food')