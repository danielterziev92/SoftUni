function calculator(numb1, operator, numb2) {
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '/': (x, y) => x / y,
        '*': (x, y) => x * y,
    }

    console.log(operations[operator](numb1, numb2).toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);