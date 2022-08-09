function vacation(group, type, day) {
    let price = 0;
    let total_price = 0;
    if (type === `Students`) {
        if (day === 'Friday'){
            price = 8.45
        } else if (day === 'Saturday'){
            price = 9.80
        } else if (day === 'Sunday'){
            price = 10.46
        }
        if (group >= 30){
            total_price = (group * price) * 0.85
        } else {
            total_price = (group * price)
        }
    } else if (type === 'Business'){
        if (day === 'Friday'){
            price = 10.90
        } else if (day === 'Saturday'){
            price = 15.60
        } else if (day === 'Sunday'){
            price = 16
        }
        if (group >= 100){
            total_price = (group * price) - (10 * price)
        } else {
            total_price = group * price
        }
    } else if (type === 'Regular'){
        if (day === 'Friday'){
            price = 15
        } else if (day === 'Saturday'){
            price = 20
        } else if (day === 'Sunday'){
            price = 22.50
        }
        if (group >= 10 && group <= 20){
            total_price = (group * price) * 0.95
        } else {
            total_price = (group * price)
        }
    }
    console.log(`Total price: ${total_price.toFixed(2)}`)
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
