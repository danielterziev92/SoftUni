function carFactory(params) {
    function addWheels(diameter) {
        const result = [];
        for (let i = 0; i < 4; i++) {
            car.wheels.push(diameter)
        }
        return result
    }

    const car = {
        model: '',
        engine: {},
        carriage: {},
        wheels: [],
    };

    car['model'] = params.model;

    if (params.power <= 90) {
        car.engine['power'] = 90;
        car.engine['volume'] = 1800;
    } else if (params.power > 90 && params.power <= 120) {
        car.engine['power'] = 120;
        car.engine['volume'] = 2400;
    } else if (params.power > 120) {
        car.engine['power'] = 200;
        car.engine['volume'] = 3500;
    }

    if (params.carriage === 'hatchback') {
        car.carriage['type'] = 'hatchback';
        car.carriage['color'] = params.color;
    } else {
        car.carriage['type'] = 'coupe';
        car.carriage['color'] = params.color;
    }

    if (params.wheelsize % 2 !== 0) {
        car.wheels.concat(addWheels(params.wheelsize));
    } else {
        car.wheels.concat(addWheels(params.wheelsize - 1));
    }

    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 });