function makeADictionary(definitions) {
    const result = [];

    for (let definition of definitions) {
        const obj = {};
        const term = Object.keys(JSON.parse(definition))[0];
        const def = Object.values(JSON.parse(definition))[0];
        console.log(obj[term] = def);
    }

    console.log(result)

    // const keys = [];
    // for (let obj of Object.values(result)) {
    //     keys.push(Object.keys(obj));
    // }
    //
    // keys.sort((a, b) => a[0].localeCompare(b[0]));
    // for (let key of keys) {
    //     console.log(Object.values(result[key[0]]))
    //     // const [term, definition] = result[key]
    //     // console.log(`Term: ${term} => Definition: ${definition}`)
    // }


}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
