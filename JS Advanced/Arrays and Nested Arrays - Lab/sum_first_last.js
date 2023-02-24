function sumFirstLast(myArray) {
    let [first, last] = [myArray.shift(), myArray.pop()]
    return Number(first) + Number(last);
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));