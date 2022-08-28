function formatGrade(grade) {
    let result = '';
    let score = 2;
    if (grade < 3) {
        result = 'Fail';
    } else {
        score = grade.toFixed(2);
        if (grade < 3.5) {
            result = 'Poor';
        } else if (grade < 4.5) {
            result = 'Good';
        } else if(grade < 5.5){
            result = 'Very good';
        } else {
            result = 'Excellent';
        }
    }

    console.log(`${result} (${score})`);
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);