function changeValue(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            result.push(array[i] + i);
        } else {
            result.push(array[i] - i);
        }
    }
    console.log(result);
    console.log(eval(array.join('+')));
    console.log(eval(result.join('+')));
}

changeValue([5, 15, 23, 56, 35]);
changeValue([-5, 11, 3, 0, 2]);