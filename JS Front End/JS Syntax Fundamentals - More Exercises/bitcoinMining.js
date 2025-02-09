function bitcoinMining(goldAmount) {
    const prices = {
        bitcoins: 11949.16,
        gold: 67.51,
    }

    const totalAmount = {
        bitcoins: 0,
        gold: 0,
        purchasedBitcoins: 0
    }

    let day = 1;
    for (let gold of goldAmount) {
        if (day % 3 === 0) {
            gold = gold * 0.7;
        }

        totalAmount.gold += gold * prices.gold;

        while (totalAmount.gold >= prices.bitcoins) {
            totalAmount.bitcoins += 1;
            totalAmount.gold -= prices.bitcoins;
            if (totalAmount.purchasedBitcoins === 0) {
                totalAmount.purchasedBitcoins = day;
            }
        }

        day += 1;
    }

    console.log(`Bought bitcoins: ${totalAmount.bitcoins}`);
    totalAmount.purchasedBitcoins !== 0
        ? console.log(`Day of the first purchased bitcoin: ${totalAmount.purchasedBitcoins}`)
        : ''
    console.log(`Left money: ${totalAmount.gold.toFixed(2)} lv.`)
}

// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);