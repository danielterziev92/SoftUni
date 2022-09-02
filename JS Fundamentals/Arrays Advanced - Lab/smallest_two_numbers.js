function smallestTwoNumbers(array){
    let result = [];
    for(let i = 0; i < 2; i++){
        let index = array.indexOf(Math.min(...array));
        result.push(array[index]);
        array[index] = Infinity;
    }
    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);