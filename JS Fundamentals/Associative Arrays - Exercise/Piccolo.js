function parkingLot(array) {
    let parking = new Map();

    for (let info of array) {
        let [action, carNumber] = info.split(', ');
        if (action === 'OUT') {
            parking.delete(carNumber)
        } else {
            parking.set(carNumber, action);
        }
    }
    if (parking.size === 0){
        console.log('Parking Lot is Empty');
    } else {
        let result = Array.from(parking.keys());
        result.sort((a, b) => a.localeCompare(b));
        for (let parkingLot of result){
            console.log(parkingLot);
        }
    }
}

parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA',
    'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);