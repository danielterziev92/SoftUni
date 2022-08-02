function calc(a, b, operator){
    switch(operator){
        case '+': console.log(a+b); break;
        case '-': console.log(a-b); break;
        case '*': console.log(a*b); break;
        case '/': console.log(a/b); break;
        case '%': console.log(a%b); break;
        case '**': console.log(a**b); break;
    }
}

calc(5, 6, '+');
calc(3, 5.5, '*');