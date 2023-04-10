function solution([n, ...inputs]) {
    let allSongs = []

    for (let i = 0; i < Number(n); i++) {
        const [piece, composer, key] = inputs[i].split('|');
        allSongs.push({piece, composer, key});
    }

    inputs = inputs.splice(n)
    let commands = inputs.shift()
    while (commands !== 'Stop') {
        const [currentCommand, ...other] = commands.split('|');
        if (currentCommand === 'Add') {
            const [piece, composer, key] = other;
            const isExist = allSongs.filter(x => x.piece === piece)
            if (isExist.length === 0) {
                allSongs.push({piece, composer, key});
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        } else if (currentCommand === 'Remove') {
            const piece = other.shift();
            const filteredSongs = allSongs.filter(song => song.piece === piece);

            if (filteredSongs.length === 0) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                allSongs = allSongs.filter(song => song.piece !== piece);
                console.log(`Successfully removed ${piece}!`)
            }
        } else if (currentCommand === 'ChangeKey') {
            const [piece, newKey] = other;
            let found = false;

            for (const song of allSongs) {
                if (song.piece === piece) {
                    song.key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                    found = true
                }
            }

            if (!found) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

        commands = inputs.shift()
    }

    for (const song of allSongs) {
        console.log(`${song.piece} -> Composer: ${song.composer}, Key: ${song.key}`);
    }
}

// solution([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])

solution([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])