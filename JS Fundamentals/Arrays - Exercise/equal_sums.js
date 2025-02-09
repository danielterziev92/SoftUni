function equalSums(arr) {
    let hasEqualSum = false;
    for(let index = 0; index < arr.length; index++){
        let leftSum = 0;
        let rightSum = 0;
        for(let ind = index - 1; ind >= 0; ind --){
            leftSum += arr[ind];
        }
        for(let ind = index + 1; ind < arr.length; ind++){
            rightSum += arr[ind];
        }
        if(leftSum === rightSum){
            console.log(index);
            hasEqualSum = true;
            break;
        }
    }
    if(!hasEqualSum){
        console.log('no')
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);