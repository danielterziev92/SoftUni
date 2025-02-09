function solution(input) {
    const [numb, ...data] = input
    const assignees = {}

    for (let i = 0; i < Number(numb); i++) {
        const assigneeInfo = data.shift();
        const [name, taskId, title, status, points] = assigneeInfo.split(':');
        if (!assignees.hasOwnProperty(name)) {
            assignees[name] = []
        }

        addAssignee(name, taskId, title, status, points);
    }

    for (const commands of data) {
        const [command, assignee, ...params] = commands.split(':')

        if (!assignees.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            continue;
        }

        if (command === 'Add New') {
            const [taskId, title, status, points] = params;

            addAssignee(assignee, taskId, title, status, points);
        } else if (command === 'Change Status') {
            const [taskId, newStatus] = params;


            let isExist = false;
            for (const task of assignees[assignee]) {
                if (task.taskId === taskId) {
                    task.status = newStatus;
                    isExist = true;
                }
            }

            if (!isExist) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }

        } else if (command === 'Remove Task') {
            let [index] = params;
            index = Number(index);

            if (index >= assignees[assignee].length || index < 0) {
                console.log('Index is out of range!');
                continue;
            }

            assignees[assignee].splice(index, 1);
        }
    }

    const tasksPoints = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0,
    }

    for (const assignee in assignees) {
        for (const task of assignees[assignee]) {
            tasksPoints[task.status] += Number(task.points);
        }
    }

    let donePoints = 0;
    let otherPoints = 0;

    Object.entries(tasksPoints).map(status => {
        let [name, points] = status;
        if (name === 'Done') {
            name += ' Points';
            donePoints += points;
        } else {
            otherPoints += points;
        }

        console.log(`${name}: ${points}pts`)
    });

    donePoints >= otherPoints
        ? console.log('Sprint was successful!')
        : console.log('Sprint was unsuccessful...')

    function addAssignee(name, taskId, title, status, points) {
        assignees[name].push({taskId, title, status, points});
    }
}

// solution([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ]);

solution([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]);