function calc(n, m){
    let result = 0;
    for (let i = Number(n); i <= Number(m); i++){
        result += i;
    }
    console.log(result)
}

calc('1', '5' );
calc('-8', '20');