function addressBook(addresses) {
    const addressBook = {};

    for (const address of addresses) {
        const [name, street] = [...address.split(':')]
        addressBook[name] = street;
    }


    const sortedBook = Object.keys(addressBook).sort((a, b) => a.localeCompare(b));

    for (let name of sortedBook) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);