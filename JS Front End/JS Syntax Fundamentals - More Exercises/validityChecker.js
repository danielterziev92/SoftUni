function validityChecker(x1, y1, x2, y2) {
    function validity(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    const options = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2]
    ];

    for (let option of options) {
        Number.isInteger(validity(...option))
            ? console.log(`{${option[0]}, ${option[1]}} to {${option[2]}, ${option[3]}} is valid`)
            : console.log(`{${option[0]}, ${option[1]}} to {${option[2]}, ${option[3]}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);