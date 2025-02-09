function solve(input) {
    let companies = {};

    for (let info of input) {
        let [company, employee] = info.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(employee)
    }

    let result = Array.from(Object.entries(companies));
    result.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, employees] of result){
        console.log(company);
        for (let employee of employees){
            console.log(`-- ${employee}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);