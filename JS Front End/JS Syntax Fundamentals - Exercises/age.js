function age(numb) {
    if (numb < 0) {
        console.log('out of bounds');
    } else {

        if (0 > numb || numb < 3) {
            console.log('baby');
        } else if (3 > numb || numb < 14) {
            console.log('child');
        } else if (13 > numb || numb < 20) {
            console.log('teenager');
        } else if (19 > numb || numb < 66) {
            console.log('adult');
        } else {
            console.log('elder');
        }
    }
}

age(20);
age(1);
age(100);
age(-1);