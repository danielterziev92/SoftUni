function listOfName(names) {
    let sortedNames = names.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`);
    }
}

listOfName(["John", "Bob", "Christina", "Ema"]);