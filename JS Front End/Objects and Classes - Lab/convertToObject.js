function convertToObject(text) {
    for(const [key, value] of Object.entries(JSON.parse(text))){
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');