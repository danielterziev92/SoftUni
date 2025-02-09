function allOddAndEvenSum(numb) {
    numb = numb.toString()
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < numb.length; i++){
        if(Number(numb[i]) % 2 === 0){
            evenSum += Number(numb[i]);
        } else {
            oddSum += Number(numb[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

allOddAndEvenSum(1000435);
allOddAndEvenSum(3495892137259234);