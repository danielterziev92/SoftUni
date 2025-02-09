function solve(array) {
    let sortedArray = array.sort();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`)
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);