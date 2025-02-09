function vacation(people, type, day) {
    let totalPrice = 0;
    let price = 0;

    if (type === 'Students') {
        if (day === 'Friday') {
            price = 8.45;
        } else if (day === 'Saturday') {
            price = 9.80;
        } else if (day === 'Sunday') {
            price = 10.46;
        }

        if (people >= 30) {
            let amount = people * price;
            totalPrice = amount - (amount * 0.15);
        } else {
            totalPrice = people * price
        }
    } else if (type === 'Business') {
        if (day === 'Friday') {
            price = 10.90;
        } else if (day === 'Saturday') {
            price = 15.60;
        } else if (day === 'Sunday') {
            price = 16;
        }

        if (people >= 100) {
            people -= 10;
        }

        totalPrice = people * price

    } else if (type === 'Regular') {
        if (day === 'Friday') {
            price = 15;
        } else if (day === 'Saturday') {
            price = 20;
        } else if (day === 'Sunday') {
            price = 22.50;
        }

        if (people >= 10 && people <= 20) {
            let amount = people * price;
            totalPrice = amount - (amount * 0.05);
        } else {
            totalPrice = people * price;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");