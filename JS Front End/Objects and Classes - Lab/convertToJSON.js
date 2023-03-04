function convertToJSON(firstName, lastName, hairColor) {
    const person = {
        'name': firstName,
        'lastName': lastName,
        'hairColor': hairColor
    }

    return JSON.stringify(person)
}

console.log(convertToJSON('George', 'Jones', 'Brown'));
console.log(convertToJSON('Peter', 'Smith', 'Blond'));