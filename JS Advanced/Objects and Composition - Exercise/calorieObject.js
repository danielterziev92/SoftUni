function calorieObject(input) {
    let calories = {};

    for (let i = 0; i < input.length; i += 2) {
        const name = input[i];
        const calorie = Number(input[i + 1]);
        calories[name] = calorie
    }

    console.log(calories)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);