function piccolo(inputs) {
    const cars = {};

    for (let input of inputs) {
        const [command, carNumber] = input.split(', ');
        if (command === 'IN') {
            cars[carNumber] = true;
        } else {
            if (cars.hasOwnProperty(carNumber)) {
                delete cars[carNumber]
            }
        }
    }

    Object.keys(cars).sort((a, b) => a.localeCompare(b)).map(x => console.log(x));
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);