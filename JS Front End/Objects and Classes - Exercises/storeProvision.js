function storeProvision(arr, arr2) {
    const productAndQuantity = arr.concat(arr2);
    const products = {};

    for (let i = 0; i < productAndQuantity.length; i += 2) {
        const name = productAndQuantity[i];
        const quantity = Number(productAndQuantity[i + 1]);
        if (!products.hasOwnProperty(name)) {
            products[name] = 0;
        }
        products[name] += quantity;
    }

    for (let [name, quantity] of Object.entries(products)) {
        console.log(`${name} -> ${quantity}`);
    }
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);

storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);