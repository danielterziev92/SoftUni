function autoEngineeringCompany(cars) {
    const allCars = {};

    for (const car of cars) {
        const [carBrand, carModel, producedCars] = car.split(' | ');
        if (!allCars.hasOwnProperty(carBrand)) {
            allCars[carBrand] = [];
        }

        if (!allCars[carBrand].hasOwnProperty(carModel)) {
            allCars[carBrand][carModel] = 0;
        }

        allCars[carBrand][carModel] += Number(producedCars);
    }

    for (const [carBrand, models] of Object.entries(allCars)) {
        console.log(carBrand);
        for (const [carModel, producedCars] of Object.entries(models)) {
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);