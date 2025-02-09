function jsonToObject(jsonString){
    let obj = JSON.parse(jsonString);
    for(let key of Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`);
    }
}

jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');
jsonToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');