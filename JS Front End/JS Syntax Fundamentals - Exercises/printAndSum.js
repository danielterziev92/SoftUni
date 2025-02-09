function printAndSum(start, end) {
    let result = 0;
    const numbers = [];
    for (let i = start; i <= end; i++) {
        result += i;
        numbers.push(i);
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${result}`);
}

printAndSum(5, 10);
printAndSum(0, 26);