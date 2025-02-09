function heroicInventory(heroes) {
    const result = [];

    for (const hero of heroes) {
        const [name, level, itemsString] = hero.split(' / ');
        let items = [];
        if (itemsString) {
            items = itemsString.split(', ');
        }
        result.push({
            name,
            level: Number(level),
            items,
        })
    }

    console.log(JSON.stringify(result))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Jason / 25 / ']);