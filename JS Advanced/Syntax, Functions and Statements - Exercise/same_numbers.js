function numbers(numb) {
    let result = 0;
    let isSame = true;
    let firstDigit = String(numb)[0];
    for(let char of numb.toString()){
        if (char != firstDigit){
            isSame = false;
        }
        result += Number(char);
    }
    console.log(isSame);
    console.log(result);
}

numbers(2222222);
numbers(1234);