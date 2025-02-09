function looping(numb){
    numb = Number(numb);
    for(let first_char = 97; first_char < 97 + numb; first_char++){
        for(let second_char = 97; second_char < 97 + numb; second_char++){
            for(let third_char = 97; third_char < 97 + numb; third_char++){
                console.log(`${String.fromCharCode(first_char)}${String.fromCharCode(second_char)}${String.fromCharCode(third_char)}`);
            }
        }
    }
}

looping('3');
looping(2);