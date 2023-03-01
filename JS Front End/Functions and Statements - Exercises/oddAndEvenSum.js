function oddAndEvenSum(numb) {
    const oddSum = numb.toString().split('').map(x => x % 2 !== 0 ? Number(x) : 0).reduce((x, y) => x + y, 0);
    const evenSum = numb.toString().split('').map(x => x % 2 === 0 ? Number(x) : 0).reduce((x, y) => x + y, 0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);