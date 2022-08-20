function centuriesConverter(numb) {
    let year = numb * 100;
    let days = Math.floor(year * 365.242199)
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${numb} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}

centuriesConverter(1);
centuriesConverter(5);

