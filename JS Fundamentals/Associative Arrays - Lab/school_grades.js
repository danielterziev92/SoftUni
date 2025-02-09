function solve(array){
    let students = {};
    let result = [];

    for (let line of array){
        line = line.split(' ');
        let name = line.shift();
        let grades = line;
        if (students.hasOwnProperty(name)){
           students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }
    }

    for (let [name, grades] of Object.entries(students)){
        let avgGrade = 0;
        grades.forEach(grade => avgGrade += Number(grade));
        avgGrade = (avgGrade / grades.length).toFixed(2);
        result.push([name, avgGrade]);
    }

    result.sort((a,b) => a[0].localeCompare(b[0]));
    for (let [student, grade] of result){
        console.log(`${student}: ${grade}`);
    }
}

solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
solve(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);