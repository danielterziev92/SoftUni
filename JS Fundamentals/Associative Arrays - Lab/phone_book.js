function solve(array){
    let phoneBook = {};
    for(let i = 0; i < array.length; i++){
        let info = array[i].split(' ');
        let name = info[0];
        let number = info[1];
        phoneBook[name] = number;
    }

    // for(let [name, phone] of Object.entries(phoneBook)){
    //     console.log(`${name} -> ${phone}`);
    // }

    for (let person in phoneBook){
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}

solve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
solve(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);