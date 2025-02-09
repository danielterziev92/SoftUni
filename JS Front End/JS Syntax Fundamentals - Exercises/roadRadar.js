function roadRadar(speed, zone) {
    const area = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    const zoneSpeed = area[zone]
    if (zoneSpeed < speed) {
        let different = speed - zoneSpeed
        let status = different <= 20 ? 'speeding' : different <= 40 ? 'excessive speeding' : 'reckless driving'
        console.log(`The speed is ${different} km/h faster than the allowed speed of ${zoneSpeed} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${zoneSpeed} zone`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');