function cooking_by_numbers(number, ...operators) {
    number = Number(number)

    for (let operator of operators) {
        if (operator == 'chop') {
            number = number / 2
        } else if (operator == 'dice') {
            number = Math.sqrt(number)
        } else if (operator == 'spice') {
            number = number + 1
        } else if (operator == 'bake') {
            number = number * 3
        } else {
            number = (number * 0.8).toFixed(1)
        }
        console.log(number)
    }

}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-'.repeat(30));
cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');