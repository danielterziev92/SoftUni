function meetings(array) {
    let meetings = {};

    for (let i = 0; i < array.length; i++){
        let info = array[i].split(' ');
        let day = info[0];
        let name = info[1];
        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetings[day] = name;
        }
    }

    for (let [day, name] of Object.entries(meetings)){
        console.log(`${day} -> ${name}`);
    }

}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);