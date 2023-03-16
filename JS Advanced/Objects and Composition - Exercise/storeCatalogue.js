function storeCatalogue(products) {
    const alphabet = {}

    for (const product of products) {
        const [productName, productPrice] = product.split(' : ');
        const firstLetter = productName[0];
        if (!alphabet.hasOwnProperty(firstLetter)) {
            alphabet[firstLetter] = {};
        }
        alphabet[firstLetter][productName] = Number(productPrice);
    }

    for (const letter of Object.keys(alphabet).sort((a, b) => a.localeCompare(b))) {
        console.log(letter);
        Object.keys(alphabet[letter]).sort((a, b) => a.localeCompare(b)).map(x => console.log(`  ${x}: ${alphabet[letter][x]}`));
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);