function even_position_elements(array) {
    const result = [];
    for (let i = 0; i < array.length; i += 2) {
        result.push(array[i]);
    }

    console.log(result.join(' '));
}

even_position_elements(['20', '30', '40', '50', '60']);
even_position_elements(['5', '10']);