function maxEqualElements(array) {
    let result = [];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray = [];
        for(let ind = i; ind < array.length; ind++){
            if(array[i] === array[ind]){
                newArray.push(array[ind]);
            } else{
                break;
            }
            if(result.length < newArray.length){
                result = newArray;
            }
        }
    }
    console.log(result.join(' '))
}
// 6 8
maxEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxEqualElements([4, 4, 4, 4]);
maxEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);