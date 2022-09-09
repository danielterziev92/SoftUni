function solve(array) {
    let result = new Map();

    for (let info of array) {
        let [name, qty] = info.split(' ');
        if (result.has(name)) {
            result.set(name, Number(result.get(name)) + Number(qty));
        } else {
            result.set(name, qty);
        }
    }

    for (let [stock, qty] of result) {
        console.log(`${stock} -> ${qty}`);
    }
}

solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
solve(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);