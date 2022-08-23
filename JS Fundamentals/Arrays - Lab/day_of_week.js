function weekend(numb){
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    let currentDay = 'Invalid day!';
    if(numb > 0 && numb < 8){
        currentDay = days[numb - 1];
    }
    console.log(currentDay)
}

weekend(3);
weekend(6);
weekend(11);
