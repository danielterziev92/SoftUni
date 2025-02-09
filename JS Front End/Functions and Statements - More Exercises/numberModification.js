function numberModification(numb) {
    function calculate(numbs) {
        return numbs.map(x => Number(x)).reduce((x, y) => x + y, 0) / numbs.length;
    }

    const numbs = numb.toString().split('')
    while (calculate(numbs) <= 5) {
        numbs.push('9');
    }

    console.log(numbs.join(''))
}

numberModification(101);
numberModification(5835);