class Storage{
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product){
        let name = product.name;
        let price = product.price;
        let quantity = product.quantity;
        this.capacity -= quantity;
        this.totalCost += (price * quantity);
        this.storage.push({name, price, quantity});
    }

    getProducts(){
        let result = '';
        this.storage.forEach(product => result+=(JSON.stringify(product))+'\n');
        return result.slice(0,-1);
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);