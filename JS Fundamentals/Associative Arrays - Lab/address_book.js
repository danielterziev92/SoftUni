function addressBook(array) {
    let addressBook = {};

    for (let info of array) {
        let [name, address] = info.split(':');
        addressBook[name] = address;
    }

    let sortAddressBook = Object.entries(addressBook);
    sortAddressBook.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    });

    for (let [name, address] of sortAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing',
    'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);