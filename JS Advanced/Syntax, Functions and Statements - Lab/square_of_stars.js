function rectangleStars(numb) {
    let result = '';
    for (let row = 1; row <= numb; row++) {
        for (let col = 1; col <= numb; col++) {
            result += '*'
            if (col == numb) {
                break;
            } else {
                result += ' ';
            }
        }
        result += '\n'
    }
    console.log(result);
}

rectangleStars(5)
rectangleStars(1)
rectangleStars(2)
rectangleStars(7)