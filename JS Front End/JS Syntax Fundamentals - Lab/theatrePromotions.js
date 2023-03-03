function theatrePromotions(day, age) {
    let result = 0;
    if (age < 0 || age > 122) {
        console.log('Error!')

    } else {
        if (day === 'Weekday') {
            if (age >= 0 && age <= 18) {
                result = 12;
            } else if (age > 18 && age <= 64) {
                result = 18;
            } else {
                result = 12;
            }
        } else if (day === 'Weekend') {
            if (age >= 0 && age <= 18) {
                result = 15;
            } else if (age > 18 && age <= 64) {
                result = 20;
            } else {
                result = 15;
            }
        } else if (day === 'Holiday') {
            if (age >= 0 && age <= 18) {
                result = 5;
            } else if (age > 18 && age <= 64) {
                result = 12;
            } else {
                result = 10;
            }
        }
        console.log(`${result}$`);
    }
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);