function townsToJSON(params) {
    let keys = params.shift()
    keys = keys.slice(2, keys.length - 2).split(' | ')
    const result = [];

    for (let param of params) {
        const currentResult = {}
        param = param.slice(2, param.length - 2).split(' | ')
        for (let i = 0; i < keys.length; i++) {
            if (!isNaN(param[i])) {
                const number = Number(param[i]).toFixed(2)
                number[number.length - 1] === '0'
                    ? currentResult[keys[i]] = Number(number.slice(0, number.length - 1))
                    : currentResult[keys[i]] = Number(number)

            } else {
                currentResult[keys[i]] = param[i]
            }
        }
        result.push(currentResult);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);