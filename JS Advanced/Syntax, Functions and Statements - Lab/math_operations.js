function calc(a, b, operator){
    if(operator == '+'){
        console.log(a+b);
    }else if (operator == '-'){
        console.log(a-b);
    } else if (operator == '*'){
        console.log(a*b);
    } else if (operator == '/'){
        console.log(a/b);
    } else if (operator == '%'){
        console.log(a%b);
    } else if (operator == '**'){
        console.log(a**b);
    }
}

calc(5, 6, '+');
calc(3, 5.5, '*');