function printMonth(numb){
    if (numb == 1){
        console.log('January');
    } else if (numb == 2){
        console.log('February');
    } else if (numb == 3){
        console.log('March');
    } else if (numb == 4){
        console.log('April');
    } else if (numb == 5){
        console.log('May');
    } else if (numb == 6){
        console.log('June');
    } else if (numb == 7){
        console.log('July');
    } else if (numb == 8){
        console.log('August');
    } else if (numb == 9){
        console.log('September');
    } else if (numb == 10){
        console.log('October');
    } else if (numb == 11){
        console.log('November');
    } else if (numb == 12){
        console.log('December')
    } else{
        console.log('Error!')
    }
}

printMonth(2);
printMonth(13);