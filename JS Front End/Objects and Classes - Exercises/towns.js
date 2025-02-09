function towns(townsArray) {
    for (let town of townsArray) {
        let [name, latitude, longitude] = town.split(' | ');
        const towns = {
            'town': name,
            'latitude': Number(latitude).toFixed(2),
            'longitude': Number(longitude).toFixed(2),
        }

        console.log(towns)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);