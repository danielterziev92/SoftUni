function cookingByNumber(numb, ...operations) {
    let operation = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x + 1,
        'bake': (x) => x * 3,
        'fillet': (x) => x * 0.8
    }

    let result = Number(numb)
    for (let currOperation of operations) {
        result = operation[currOperation](result);
        console.log(Number.isInteger(result) ? result : result.toFixed(1))
    }

}

cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');