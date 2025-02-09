function summing(startNumb, endNumb){
    let result = 0;
    // let loop = [];
    // for(let i = startNumb; i <= endNumb; i++){
    //     loop.push(i);
    //     result += i;
    // }
    // console.log(loop.join(' '))
    // console.log(`Sum: ${result}`);

    let loop = '';
    for( let i = startNumb; i <= endNumb; i++){
        loop += i + ' ';
        result += i;
    }
    console.log(loop.trim());
    console.log(`Sum: ${result}`);
}

summing(5, 10);
summing(0, 26);
summing(50, 60);