function listOfNames(names) {
    const result = names.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= result.length; i++) {
        console.log(`${i}.${result[i - 1]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);