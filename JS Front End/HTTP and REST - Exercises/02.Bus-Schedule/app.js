function solve() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const result = document.querySelector('.info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let allData;

    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            allData = data;
        })
        .catch((err) => {
            allData = 'Error';
        })

    function depart() {
        departButton.disabled = true;
        arriveButton.disabled = false;
        result.textContent = 'Next stop Depot';
    }

    async function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;
        result.textContent = 'Arriving at Depot';
    }

    return {
        depart,
        arrive
    };
}

let result = solve();