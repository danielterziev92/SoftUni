function solve(array) {
    let result = {};

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false
        let char = array[i][0];
        let currentProduct = array[i];
        let productName = currentProduct.split(' : ')[0];
        if (!result.hasOwnProperty(char)) {
            result[char] = [];
        }
        for(let product of result[char]){
            if(product.startsWith(productName)){
                let index = result[char].indexOf(product)
                result[char][index] = currentProduct;
                isDuplicate = true;
            }
        }
        if(!isDuplicate) {
            result[char].push(currentProduct);
        }
    }

    result = Object.keys(result).sort().reduce(function (acc, key) {
        acc[key] = result[key];
        return acc;
    }, {});

    for (let [char, value] of Object.entries(result)) {
        console.log(char);
        let products = value.sort()
        for (let product of products) {
            let info = product.split(' : ');
            let name = info[0];
            let qty = info[1];
            console.log(`  ${name}: ${qty}`);
        }
    }

}

solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10', 'Appricot : 123123120.4']);