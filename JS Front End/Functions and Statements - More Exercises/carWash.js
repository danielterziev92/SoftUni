function carWash(commands) {
    const options = {
        'soap': (x) => x + 10,
        'water': (x) => x * 1.2,
        'vacuum cleaner': (x) => x * 1.25,
        'mud': (x) => x * 0.9,
    }
    let result = 0;

    for (let command of commands) {
        result = options[command](result);
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);