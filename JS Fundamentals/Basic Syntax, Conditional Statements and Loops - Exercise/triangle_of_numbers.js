function triangle(numb){
    numb = Number(numb);
    for(let i = 1; i <= numb; i++){
        let row = [];
        for(let col = 1; col <= i; col++){
            row.push(`${i}`)
        }
        console.log(row.join(' '));
    }
}

triangle(3);
triangle(5);
triangle(6);