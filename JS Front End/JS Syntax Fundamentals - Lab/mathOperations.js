function mathOperations(numbOne, numbTwo, operator) {
    if (operator == '+') {
        console.log(numbOne + numbTwo);
    } else if (operator == '-') {
        console.log(numbOne - numbTwo);
    } else if (operator == '*') {
        console.log(numbOne * numbTwo);
    } else if (operator == '/') {
        console.log(numbOne / numbTwo);
    } else if (operator == '%') {
        console.log(numbOne % numbTwo);
    } else if (operator == '**') {
        console.log(numbOne ** numbTwo);
    }

}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');