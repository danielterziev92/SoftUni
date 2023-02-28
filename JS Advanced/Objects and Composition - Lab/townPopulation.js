function townPopulation(towns) {
    const allTowns = {};

    for (let town of towns) {
        const [name, population] = [...town.split(' <-> ')];
        if (allTowns[name]) {
            allTowns[name] += Number(population);
        } else {
            allTowns[name] = Number(population);
        }
    }

    for (const [name, population] of Object.entries(allTowns)) {
        console.log(`${name.trim()} : ${population}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])