function aggregateElements(params){
    let sum = 0;
    let invert_sum = 0;
    let concat = '';
    for(let i = 0; i < params.length; i++) {
        sum += params[i]
        invert_sum += 1 / params[i]
        concat += `${params[i]}`;
    }
    console.log(sum);
    console.log(invert_sum);
    console.log(concat);
}


aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);