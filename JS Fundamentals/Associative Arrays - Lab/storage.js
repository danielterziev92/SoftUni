function solve(array) {
    let result = new Map();

    for (let info of array) {
        let [name, qty] = info.split(' ');
        qty = Number(qty);
        let oldQty = 0;
        if (result.has(name)) {
            oldQty = result.get(name);
        }
        result.set(name, qty + oldQty);
    }

    for (let [stock, qty] of result) {
        console.log(`${stock} -> ${qty}`);
    }
}

solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
solve(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);