function juiceFlavors(juices) {
    const allJuices = {};
    const result = {}

    for (const juice of juices) {
        const [juiceName, juiceQuantity] = juice.split(' => ');
        if (!allJuices.hasOwnProperty(juiceName)) {
            allJuices[juiceName] = 0;
        }
        allJuices[juiceName] += Number(juiceQuantity);

        if (allJuices[juiceName] >= 1000) {
            result[juiceName] = allJuices[juiceName];
        }
    }

    for (let [juiceName, juiceQuantity] of Object.entries(result)) {
        if (juiceQuantity >= 1000) {
            console.log(`${juiceName} => ${Math.floor(juiceQuantity / 1000)}`);
        }
    }
}

// juiceFlavors(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);