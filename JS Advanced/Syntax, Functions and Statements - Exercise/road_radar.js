function speedLimit(speed, place) {
    let area = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    let areaSpeed = area[place]

    if (areaSpeed < speed) {
        let difference = speed - areaSpeed
        let speedingStatus = difference <= 20 ? 'speeding' : difference <= 40 ? 'excessive speeding' : 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaSpeed} - ${speedingStatus}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${areaSpeed} zone`)
    }
}

speedLimit(40, 'city');
speedLimit(21, 'residential');
speedLimit(120, 'interstate');
speedLimit(200, 'motorway');