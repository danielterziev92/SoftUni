function sameNumbers(numbs) {
    numbs = numbs.toString().split('').map(x => Number(x))
    numbs.every(x => x === numbs[0]) ? console.log(true) : console.log(false);
    console.log(numbs.reduce((x, y) => x + y, 0));
}

sameNumbers(2222222);
sameNumbers(1234);