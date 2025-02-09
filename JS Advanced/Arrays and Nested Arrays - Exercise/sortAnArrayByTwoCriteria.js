function sortAnArrayByTwoCriteria(arr) {
    console.log(arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);