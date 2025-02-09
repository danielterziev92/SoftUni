function inventory(array) {
    let heroInventories = [];

    for (let i = 0; i < array.length; i++) {
        let information = array[i].split(' / ');
        let name = information.shift();
        let level = Number(information.shift());
        let items = [...information];
        heroInventories.push({name, level, items});
    }
    heroInventories.sort((a, b) => a.level < b.level ? -1 : (a.level > b.level ? 1 : 0));
    for (let i = 0; i < heroInventories.length; i++) {
        for (let value of Object.keys(heroInventories[i])) {
            if (value === 'name') {
                console.log(`Hero: ${heroInventories[i].name}`);
            } else if (value === 'level') {
                console.log(`level => ${heroInventories[i].level}`);
            } else {
                console.log(`items => ${heroInventories[i].items}`)
            }
        }
    }
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
console.log(' -------- ');
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);