function solve(params) {
    const positions = params.shift().split('|');

    let commands = params.shift();
    while (commands !== 'Finish') {
        const [command, ...data] = commands.split(' ')

        if (command === 'Retake') {
            const [overtakingHorse, overtakenHorse] = data
            const overtakingHorseIndex = positions.indexOf(overtakingHorse);
            const overtakenHorseIndex = positions.indexOf(overtakenHorse);

            if (overtakingHorseIndex < overtakenHorseIndex) {
                positions.splice(overtakenHorseIndex, 1);
                positions.splice(overtakingHorseIndex, 1, overtakenHorse);
                positions.splice(overtakenHorseIndex, 0, overtakingHorse);

                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
            }

        } else if (command === 'Trouble') {
            const horseName = data.shift()

            const currentHorseIndex = positions.indexOf(horseName);

            if (currentHorseIndex - 1 < positions.length && currentHorseIndex - 1 >= 0) {
                positions.splice(currentHorseIndex, 1);
                positions.splice(currentHorseIndex - 1, 0, horseName);

                console.log(`Trouble for ${horseName} - drops one position.`)
            }


        } else if (command === 'Rage') {
            const horseName = data.shift();

            const currentHorseIndex = positions.indexOf(horseName);

            if (currentHorseIndex < positions.length) {
                let movedPosition = 2
                positions.splice(currentHorseIndex, 1);

                if (currentHorseIndex === positions.length - 1) {
                    movedPosition = 1
                }
                positions.splice(currentHorseIndex + movedPosition, 0, horseName);

                console.log(`${horseName} rages 2 positions ahead.`)
            }

        } else if (command === 'Miracle') {
            const miracleHorse = positions.shift()
            positions.push(miracleHorse);

            console.log(`What a miracle - ${miracleHorse} becomes first.`)
        }

        commands = params.shift()
    }

    console.log(positions.join('->'));

    console.log(`The winner is: ${positions.pop()}`)
}

// solve((['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish']))

// solve((['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish']))

solve((['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly']));

// (['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Domino|Onyx|Sugar|Fiona'
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'])