function store(array1, array2) {
    class StoreProvision {
        constructor(item, quantity) {
            this.item = item;
            this.quantity = quantity;
        }
    }
    let result = new StoreProvision();

    function addingToStore(array) {
        for (let i = 0; i < array.length; i += 2) {
            let product = array[i];
            let quantity = Number(array[i+1]);
            if(!(product in result)){
                result[product] = 0;
            }
            result[product] += quantity;
        }
    }

    let array = array1.concat(array2);
    addingToStore(array);
    result = JSON.parse(JSON.stringify(result));

    for(let product in result){
        console.log(`${product} -> ${result[product]}`);
    }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
store(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])