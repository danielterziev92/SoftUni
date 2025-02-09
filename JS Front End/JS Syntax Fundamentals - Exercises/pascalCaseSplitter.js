function pascalCaseSplitter(text) {
    let result = '';
    let is_upper = false;
    text = text.split('');
    for (let char of text) {
        if (char.toUpperCase() === char && is_upper === false) {
            is_upper = true
            result += char;
        } else if (is_upper && char.toLowerCase() === char) {
            result += char;
        } else {
            is_upper = false;
            text.unshift(char);
            result += ', '
        }
    }

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');