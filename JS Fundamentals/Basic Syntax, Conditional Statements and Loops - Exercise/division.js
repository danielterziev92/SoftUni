function divisible(numb) {
    numb = Number(numb)
    if (numb % 10 === 0) {
        console.log('The number is divisible by 10')
    } else if (numb % 7 === 0) {
        console.log('The number is divisible by 7')
    } else if (numb % 6 === 0) {
        console.log('The number is divisible by 6')
    } else if (numb % 3 === 0) {
        console.log('The number is divisible by 3')
    } else if (numb % 2 === 0) {
        console.log('The number is divisible by 2')
    } else {
        console.log('Not divisible')
    }
}

divisible(30);
divisible(15);
divisible(12);
divisible(1643);