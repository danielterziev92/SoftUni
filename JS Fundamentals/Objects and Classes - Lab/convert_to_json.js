function toJSON(name, lastName, hairColor) {
    let obj = { name, lastName, hairColor}
    let JSONObj = JSON.stringify(obj);
    console.log(JSONObj);
}

toJSON('George', 'Jones', 'Brown');
toJSON('Peter', 'Smith', 'Blond');