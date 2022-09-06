function employeeLength(array){
    class Employee{
        constructor(name) {
            this.name = name;
        }

        print(name){
            console.log(`Name: ${name} -- Personal Number: ${name.length}`);
        }
    }

    for(let i = 0; i < array.length; i++){
        let employee = new Employee(array[i]);
        employee.print(array[i]);
    }
}

employeeLength([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);