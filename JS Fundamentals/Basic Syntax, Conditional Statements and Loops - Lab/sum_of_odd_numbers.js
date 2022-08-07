function sumOddNumbers(numb) {
    let oddNumber = 1;
    let result = 0;
    let count = 0;
    while (count !== numb) {
        if (oddNumber % 2 !== 0) {
            console.log(oddNumber);
            result += oddNumber;
            count += 1;
        }
        oddNumber += 1;
    }
    console.log(`Sum: ${result}`)
}

sumOddNumbers(5);
sumOddNumbers(3);