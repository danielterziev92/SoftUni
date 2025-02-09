function solve() {
    function getAllRestaurant(objs) {
        let result = {};
        for (const obj of Array.from(objs)) {
            let [restaurantName, workers] = obj.split(' - ');
            if (!result.hasOwnProperty(restaurantName)) {
                result[restaurantName] = {};
            }
            for (let worker of workers.split(', ')) {
                const [workerName, salary] = worker.split(' ')
                result[restaurantName][workerName] = Number(salary);
            }
        }
        return result;
    }

    function averageAndBestSalaryFunc(restaurants) {
        let result = {
            averageSalary: 0,
            restaurantName: '',
            bestSalary: 0,
        };

        for (let restaurantName in restaurants) {
            const numberOfWorkers = Object.keys(restaurants[restaurantName]).length
            const restaurantAverageSalary = Object.values(restaurants[restaurantName])
                .reduce((previousValue, currentValue) => previousValue + currentValue, 0) / numberOfWorkers

            if (restaurantAverageSalary > result.averageSalary) {
                result.averageSalary = restaurantAverageSalary;
                result.restaurantName = restaurantName;
            }

            const bestSalary = Object.values(restaurants[restaurantName]).sort((a, b) => b - a)[0];
            if (bestSalary > result.bestSalary) {
                result.bestSalary = bestSalary;
            }

        }

        return result;
    }

    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const input = document.querySelector('#inputs textarea').value;
        const bestRestaurantField = document.querySelector('#bestRestaurant p');
        const workersField = document.querySelector('#workers p');
        const restaurants = getAllRestaurant(JSON.parse(input));
        const averageParams = averageAndBestSalaryFunc(restaurants);

        bestRestaurantField.textContent = `Name: ${averageParams.restaurantName} Average Salary: ${averageParams.averageSalary.toFixed(2)} Best Salary: ${averageParams.bestSalary.toFixed(2)}`
        workersField.textContent = Object.entries(restaurants[averageParams.restaurantName])
            .sort(([, a], [, b]) => b - a)
            .map(x => `Name: ${x[0]} With Salary: ${x[1]}`)
            .join(' ');
    }
}

// ["PizzaHut - Peter 500, George 300, Mark 800",
//     "TheLake - Bob 1300, Joe 780, Jane 660",
//     "PizzaHut - Daniel 1500, Maria 3000, Vili 800"]