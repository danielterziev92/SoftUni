function gcd(x, y){
    while(y){
        let divisor = y;
        y = x % y;
        x = divisor;
    }
    console.log(x);
}

gcd(15,5);
gcd(2154, 458);