function sumEvenNumber(array){
    let evenArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenArray.push(array[i]);
        }
    }
    console.log(eval(evenArray.join('+')) || 0);
}

sumEvenNumber(['1','2','3','4','5','6']);
sumEvenNumber(['3','5','7','9']);
sumEvenNumber(['2','4','6','8','10']);