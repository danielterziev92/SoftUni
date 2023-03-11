class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []
        }
        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let result = ''
        const bestDepartment = {name: '', averageSalary: 0};
        for (const department in this.departments) {
            const averageSum = this.departments[department].reduce((t, {salary}) => t + salary, 0) / this.departments[department].length
            if (averageSum > bestDepartment.averageSalary) {
                bestDepartment.averageSalary = averageSum;
                bestDepartment.name = department
            }
        }
        result += `Best Department is: ${bestDepartment.name}\n`;
        result += `Average salary: ${bestDepartment.averageSalary.toFixed(2)}\n`;
        const employees = Object.values(this.departments[bestDepartment.name]);
        const sortedEmployee = employees.sort((a, b) => b.salary - a.salary).sort(function (a, b) {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name);
            }
        }).map(x => `${x.name} ${x.salary} ${x.position}`);
        result += sortedEmployee.join('\n');

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer