function town(array){
    let result = {};
    for(let i = 0; i < array.length; i++){
        let information = array[i].split(' | ');
        result.town = information[0];
        result.latitude = Number(information[1]).toFixed(2);
        result.longitude = Number(information[2]).toFixed(2);
        console.log(result);
    }
}

town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
town(['Plovdiv | 136.45 | 812.575']);