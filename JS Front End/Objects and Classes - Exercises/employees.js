function employees(employeesList) {
    const employees = {};

    for (let employee of employeesList) {
        employees[employee] = employee.length;
    }

    for (let [name, number] of Object.entries(employees)) {
        console.log(`Name: ${name} -- Personal Number: ${number}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);