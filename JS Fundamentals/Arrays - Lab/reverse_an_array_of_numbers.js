function reverse(n, array){
    let newArray = [];
    for(let i = 0; i < n; i++){
        newArray.push(array[i]);
    }
    array = [];
    for(let i = newArray.length-1; i >= 0; i--){
        array.push(newArray[i])
    }
    console.log(array.join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);
