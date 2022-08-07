function round(numb, precision){
    if (precision > 15) {
        precision = 15;
    }
    numb = numb.toFixed(precision);
    console.log(parseFloat(numb));
}

round(3.1415926535897932384626433832795,2);
round(10.5,3);