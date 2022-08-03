function numbers(numb) {
    let result = 0;
    let isTrue = false;
    let prev = '';
    for(let char of numb.toString()){
        if (char == prev){
            isTrue = true;
        } else {
            prev = char;
            isTrue = false;
        }
        result += Number(char);
    }
    console.log(isTrue);
    console.log(result);
}

numbers(2222222);
numbers(1234);