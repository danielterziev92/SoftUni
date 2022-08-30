function matrix(numb){
    for(let i = 0; i < numb; i++){
        let result = [];
        for(let ind = 0; ind < numb; ind++){
            result.push(numb);
        }
        console.log(result.join(' '));
    }
}

matrix(3);
matrix(7);
matrix(2);