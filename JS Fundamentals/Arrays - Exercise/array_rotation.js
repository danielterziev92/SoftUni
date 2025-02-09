function rotation(arr, numb) {
    for (let i = 0; i < numb; i++) {
        let currentValue = arr.shift();
        arr.push(currentValue);
    }
    console.log(arr.join(' '));
}

rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
rotation([2, 4, 15, 31], 5);