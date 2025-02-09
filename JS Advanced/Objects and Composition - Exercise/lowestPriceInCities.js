function lowestPriceInCities(inputs) {
    const result = {};

    for (const input of inputs) {
        let [townName, productName, productPrice] = input.split(' | ');
        productPrice = Number(productPrice);
        if (result.hasOwnProperty(productName)) {
            if (productPrice < result[productName].price) {
                result[productName].price = productPrice;
                result[productName].town = townName;
            }
        }
        if (!result.hasOwnProperty(productName)) {
            result[productName] = {price: productPrice, town: townName};
        }
    }

    for (const product of Object.entries(result)) {
        const [productName, values] = product
        const [price, townName] = Object.values(values);
        console.log(`${productName} -> ${price} (${townName})`);
    }
}

lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);