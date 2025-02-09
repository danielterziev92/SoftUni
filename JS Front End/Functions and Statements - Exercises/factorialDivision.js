function factorialDivision(numb1, numb2) {
    function factorial(numb) {
        let result = 1;

        for (let i = 1; i <= numb; i++) {
            result *= i;
        }

        return result;
    }

    let firstFactorial = factorial(numb1);
    let secondFactorial = factorial(numb2);

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);