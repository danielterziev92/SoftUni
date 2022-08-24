function maxNumber(array) {
    let result = [];
    let maxValueIndex = array.indexOf(Math.max(...array));
    let currentElementValue = 0;
    for (let i = maxValueIndex; i < array.length; i++) {
        if(array[i] >= (array[i+1] || 0)){
            result.push(array[i])
        }
        currentElementValue = array[i]

    }
    result = [...new Set(result)];
    console.log(result.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);