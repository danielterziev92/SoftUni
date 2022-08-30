function factorialDivision(numb1, numb2){
    let fact1 = factorialNumber(numb1);
    let fact2 = factorialNumber(numb2);

    function factorialNumber(numb) {
        let result = 1;
        for (let i = 1; i <= numb; i++) {
            result *= i
        }
        return result;
    }

    console.log((fact1 / fact2).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);