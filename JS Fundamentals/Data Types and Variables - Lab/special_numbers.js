function specialNumbers(numb) {
    for (let i = 1; i <= numb; i++) {
        let currentNumb = 0;
        for(let ind = 0; ind < i.length; ind++){
            currentNumb += i[ind]
        }
        console.log(`${i} -> ${currentNumb}`)
    }
}

specialNumbers(15);
