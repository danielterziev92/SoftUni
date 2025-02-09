function party(array) {
    let partyPeople = {vip: [], regular: []};
    let currentCommand = array.shift();
    while (currentCommand !== 'PARTY') {
        if (currentCommand.match(/^\d/)) {
            partyPeople.vip.push(currentCommand)
        } else {
            partyPeople.regular.push(currentCommand);
        }
        currentCommand = array.shift();
    }
    for (let guest of array) {
        if (guest.match(/^\d/)) {
            if (partyPeople.vip.includes(guest)) {
                let index = partyPeople.vip.indexOf(guest)
                partyPeople.vip.splice(index, 1);
            }
        } else {
            if (partyPeople.regular.includes(guest)) {
                let index = partyPeople.regular.indexOf(guest)
                partyPeople.regular.splice(index, 1);
            }
        }
    }
    let guestLeftCount = Object.values(partyPeople.vip).concat(Object.values(partyPeople.regular));
    console.log(guestLeftCount.length);
    for (let guest of guestLeftCount) {
        console.log(guest)
    }
}

party(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
party(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL',
    'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ',
    'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);