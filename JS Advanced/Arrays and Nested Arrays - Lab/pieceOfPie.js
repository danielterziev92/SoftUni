function pieceOfPie(pieOfFlavors, firstFlavors, secondFlavors) {
    const firstFlavorIndex = pieOfFlavors.indexOf(firstFlavors);
    const secondFlavorIndex = pieOfFlavors.indexOf(secondFlavors) + 1;

    return pieOfFlavors.slice(firstFlavorIndex, secondFlavorIndex);
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

console.log(pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));