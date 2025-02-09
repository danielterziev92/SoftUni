function meetings(information) {
    const meetings = {}

    for (const info of information) {
        const [day, person] = [...info.split(' ')];
        if (meetings[day] === undefined) {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);