function sortHeroByLevel(arr) {
    const heroes = [];

    for (let heroInfo of arr) {
        const [name, level, items] = heroInfo.split(' / ');
        heroes.push({name, level: Number(level), items});
    }


    heroes.sort((a, b) => a.level - b.level).map(x => console.log(`Hero: ${x.name} \nlevel => ${x.level}\nitems => ${x.items}`));
}

sortHeroByLevel([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);