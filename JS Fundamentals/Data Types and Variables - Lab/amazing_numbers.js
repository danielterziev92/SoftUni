function amazingNumber(numb){
    let sum = 0;
    let currentNumb = numb.toString();
    for(let i = 0; i < currentNumb.length; i++){
        sum += Number(currentNumb[i]);
    }
    let isAmazing = 'False';
    if (sum.toString().includes('9')){
        isAmazing = 'True';
    }
    console.log(`${numb} Amazing? ${isAmazing}`);
}

amazingNumber(1233);
amazingNumber(999);
amazingNumber(982);