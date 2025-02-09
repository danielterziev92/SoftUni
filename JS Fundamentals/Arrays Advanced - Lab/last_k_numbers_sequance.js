function solve(numb1, numb2){
    let result = [1];
    for(let i = 1; i < numb1; i++){
        let lastIndexes = eval(result.slice(-numb2).join('+').toString());
        result.push(lastIndexes);
    }
    console.log(result.join(' '));
}

solve(6, 3);
solve(8, 2);