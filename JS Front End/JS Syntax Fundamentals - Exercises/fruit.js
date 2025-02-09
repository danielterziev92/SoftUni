function calculateFruit(fruit, weight, price) {
    let kg = weight / 1000
    let amount = price * kg
    console.log(`I need $${amount.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruit('orange', 2500, 1.80);
calculateFruit('apple', 1563, 2.35);