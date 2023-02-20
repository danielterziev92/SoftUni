function validity_checker(x1, y1, x2, y2) {
    function checker(x1, y1, x2, y2) {
        let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(result)
    }

    let variables = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2]
    ];

    for (let variable of variables) {
        let result = `{${variable[0]}, ${variable[1]}} to {${variable[2]}, ${variable[3]}} is `;
        if (checker(...variable)) {
            result += 'valid'
        } else {
            result += 'invalid'
        }
        console.log(result);
    }
}

validity_checker(3, 0, 0, 4);
validity_checker(2, 1, 1, 1);