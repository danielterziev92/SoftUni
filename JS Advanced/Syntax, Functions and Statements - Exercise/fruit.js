function buyMeFruit(fruit, weight, price){
    console.log(`I need $${((weight/1000)*price).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}

buyMeFruit('orange', 2500, 1.80);
buyMeFruit('apple', 1563, 2.35);
