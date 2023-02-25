function arrayRotation(numbs, numb) {

    for (let i = 0; i < numb; i++) {
        let currentNumb = numbs.shift();
        numbs.push(currentNumb);
    }

    console.log(numbs.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2); //32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4); //32 21 61 1
arrayRotation([2, 4, 15, 31], 5); //4 15 31 2