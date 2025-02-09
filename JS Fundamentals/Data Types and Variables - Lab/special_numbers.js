function specialNumbers(numb) {
    for (let i = 1; i <= numb; i++) {
        let currentNumb = 0;
        if (i >= 10) {
            for(let ind = 0; ind < i.toString().length; ind++){
                let result = i.toString()[ind];
                currentNumb += Number(result);
            }
        } else {
            currentNumb += i;
        }
        let isSpecial = false;
        if(currentNumb === 5 || currentNumb === 7 || currentNumb === 11){
            isSpecial = true;
        }
        console.log(`${i} -> ${isSpecial.toString().charAt(0).toUpperCase() + isSpecial.toString().slice(1)}`);
    }
}

specialNumbers(15);
specialNumbers(30);