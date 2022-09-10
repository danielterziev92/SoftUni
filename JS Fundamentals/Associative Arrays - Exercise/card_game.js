function solve(input) {
    let values = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    let type = {'S': 4, 'H': 3, 'D': 2, 'C': 1};

    let players = {};
    for (let info of input) {
        info = info.split(': ')
        let name = info.shift();
        let cards = new Set(info.shift().split(', '));
        if (players.hasOwnProperty(name)) {
            for (let card of cards) {
                players[name].add(card)
            }
        } else {
            players[name] = cards;
        }
    }

    for (let [name, cards] of Object.entries(players)){
        let totalCartValues = 0;
        for (let cart of cards){
            let cartPower;
            let cartType;
            if (cart.startsWith('10')){
                cartPower = values[cart.slice(0, 2)];
                cartType = type[cart[2]];
            } else {
                cartPower = values[cart[0]];
                cartType = type[cart[1]];
            }
            totalCartValues += cartPower * cartType;
        }
        console.log(`${name}: ${totalCartValues}`);
    }

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);

solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD']);