function jansNotation(input) {
    const result = [];
    const operations = {
        '*': (a, b) => {
            return a * b;
        },
        '/': (a, b) => {
            return a / b;
        },
        '-': (a, b) => {
            return a - b;
        },
        '+': (a, b) => {
            return a + b;
        }
    }

    let error = 'Error: too many operands!';
    for (const value of input) {
        if (!isNaN(value)) {
            result.push(value)
        } else {
            const numb2 = result.pop();
            const numb1 = result.pop();
            if (numb1 !== undefined && numb2 !== undefined) {
                result.push(operations[value](numb1, numb2));
            } else {
                error = 'Error: not enough operands!';
                break
            }

        }
    }

    result.length === 1
        ? console.log(result.join(''))
        : console.log(error);
}

jansNotation([3, 4, '+']);
jansNotation([31, 2, "+", 11, '/'])
jansNotation([5, 3, 4, '*', '-']);