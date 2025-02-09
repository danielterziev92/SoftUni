function lostFightCount(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let helmetBrokenCount = 0;
    let swordBrokenCount = 0;
    let shieldBrokenCount = 0;
    let armorBrokenCount = 0;
    for (let fight = 1; fight <= lostFightCount; fight++) {
        if (fight % 2 === 0) {
            helmetBrokenCount += 1;
        }
        if (fight % 3 === 0) {
            swordBrokenCount += 1;
        }
        if(fight % 2 === 0 && fight % 3 === 0){
            shieldBrokenCount += 1;
            if(shieldBrokenCount % 2 === 0){
                armorBrokenCount += 1;
            }
        }
    }
    expenses = helmetBrokenCount * helmetPrice + swordBrokenCount * swordPrice + shieldBrokenCount * shieldPrice + armorBrokenCount * armorPrice
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

lostFightCount(7, 2, 3, 4, 5);
lostFightCount(23, 12.5, 21.5, 40, 200)