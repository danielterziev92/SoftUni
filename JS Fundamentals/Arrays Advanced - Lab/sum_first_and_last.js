function sumFirstAndLastElement(array){
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    console.log(firstElement + lastElement);
}

sumFirstAndLastElement(['20', '30', '40']);
sumFirstAndLastElement(['5', '10']);