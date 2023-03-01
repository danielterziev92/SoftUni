function orders(product, quantity) {
    const products = {
        'water': 1,
        'coffee': 1.5,
        'coke': 1.4,
        'snacks': 2,
    }

    console.log((products[product] * quantity).toFixed(2));
}

orders("water", 5);