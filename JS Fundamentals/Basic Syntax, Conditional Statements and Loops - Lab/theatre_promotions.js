function ticketCost(day, age) {
    let ticket = 0;
    if (day == 'Weekday' && (age >= 0 && age <= 122)) {
        if (age >= 0 && age <= 18) {
            ticket = 12;
        } else if (age > 18 && age <= 64) {
            ticket = 18;
        } else {
            ticket = 12;
        }
    } else if (day == 'Weekend' && (age >= 0 && age <= 122)) {
        if (age >= 0 && age <= 18) {
            ticket = 15;
        } else if (age > 18 && age <= 64) {
            ticket = 20;
        } else {
            ticket = 15;
        }
    } else if (day == 'Holiday' && (age >= 0 && age <= 122)) {
        if (age >= 0 && age <= 18) {
            ticket = 5;
        } else if (age > 18 && age <= 64) {
            ticket = 12;
        } else {
            ticket = 10;
        }
    } else {
        console.log('Error!');
    }
    if (ticket > 0) {
        console.log(`${ticket}$`);
    }
}

ticketCost('Weekday', 42);
ticketCost('Holiday', -12);
ticketCost('Holiday', 15);