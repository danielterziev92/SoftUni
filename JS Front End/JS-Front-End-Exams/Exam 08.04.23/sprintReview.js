function solve(params) {
    let [n, ...leftParams] = params
    const assignees = {}

    for (let i = 0; i < n; i++) {
        const info = leftParams.shift();
        const [assignee, taskId, title, status, estimatedPoints] = info.split(':')
        if (!assignees.hasOwnProperty(assignee)) {
            assignees[assignee] = []
        }
        assignees[assignee].push({taskId, title, status, estimatedPoints});
    }

    for (const command of leftParams) {
        const [currentCommand, ...newParams] = command.split(':');
        if (currentCommand === 'Add New') {
            const [assignee, taskId, title, status, estimatedPoints] = newParams;

            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            assignees[assignee].push({taskId, title, status, estimatedPoints});

        } else if (currentCommand === 'Change Status') {
            const [assignee, taskId, newStatus] = newParams;
            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if (assignees[assignee].taskId !== taskId) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }

            assignees[assignees][taskId].status = newStatus;
        } else if (currentCommand === 'Remove Task') {
            let [assignee, index] = newParams;
            index = Number(index)
            const maxIndex = Object.keys(assignees).length;

            if (index >= maxIndex) {
                console.log('Index is out of range!');
                continue;
            }

            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            delete assignees[assignee];
        }
    }
    const statusPoints = {}

    for (const assignee in assignees) {
        for (const task of assignees[assignee]) {
            const {status, estimatedPoints} = task;
            if (!statusPoints.hasOwnProperty(status)) {
                statusPoints[status] = 0;
            }

            statusPoints[status] += Number(estimatedPoints);
        }
    }

    Object.entries(statusPoints).map(currentStatus => {
        if (currentStatus[0] === 'Done') {
            currentStatus[0] = 'Done Points';
        }
        console.log(`${currentStatus[0]}: ${currentStatus[1]}pts`)
    })

    const combinedTasks = ["ToDo", "In Progress", "Code Review"]
    let sumCombinedTasks = 0;
    let sumDoneTasks = 0;

    Object.entries(statusPoints).map(currentStatus => {
        const [status, points] = currentStatus;
        if (status !== 'Done') {
            sumCombinedTasks += points;
        } else {
            sumDoneTasks += points;
        }
    })

    sumDoneTasks >= sumCombinedTasks
        ? console.log("Sprint was successful!")
        : console.log("Sprint was unsuccessful...")
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);

// solve([
//     '4',
//     'Kiril:BOP-1213:Fix Typo:Done:1',
//     'Peter:BOP-1214:New Products Page:In Progress:2',
//     'Mariya:BOP-1215:Setup Routing:ToDo:8',
//     'Georgi:BOP-1216:Add Business Card:Code Review:3',
//     'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//     'Change Status:Georgi:BOP-1216:Done',
//     'Change Status:Will:BOP-1212:In Progress',
//     'Remove Task:Georgi:3',
//     'Change Status:Mariya:BOP-1215:Done',
// ]);