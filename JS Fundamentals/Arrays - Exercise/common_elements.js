function compare(array1, array2){
    let result = [];
    for(let char of array1){
        for(let char2 of array2){
            if(char === char2){
                result.push(char);
            }
        }
    }
    for(let str of result){
        console.log(str);
    }
}

compare(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);

compare(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);