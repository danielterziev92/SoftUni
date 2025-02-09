function simpleCalculator(numb1, numb2, delimiter) {
    const operators = {
        'multiply': (x, y) => x * y,
        'divide': (x, y) => x / y,
        'add': (x, y) => x + y,
        'subtract': (x, y) => x - y,
    }

    console.log(operators[delimiter](numb1, numb2));
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');