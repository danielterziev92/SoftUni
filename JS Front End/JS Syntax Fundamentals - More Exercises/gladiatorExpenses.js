function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    const items = {
        helmet: {times: 0},
        sword: {times: 0},
        shield: {times: 0},
        armor: {times: 0},
    }

    for (let fight = 1; fight <= lostFightCount; fight++) {
        if (fight % 2 === 0) {
            items.helmet.times += 1;
        }

        if (fight % 3 === 0) {
            items.sword.times += 1;
        }

        if (fight % 2 === 0 && fight % 3 === 0) {
            items.shield.times += 1;

            if (items.shield.times % 2 === 0) {
                items.armor.times += 1;
            }
        }


    }

    const result = items.helmet.times * helmetPrice + items.sword.times * swordPrice +
        items.shield.times * shieldPrice + items.armor.times * armorPrice;

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);