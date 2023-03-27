function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const ID = document.getElementById('stopId').value;
    const busName = document.getElementById('stopName');
    const allBuses = document.getElementById('buses');

    fetch(`${BASE_URL}${ID}`)
        .then((res) => res.json())
        .then((data) => {
            const {name, buses} = data;
            busName.textContent = name;
            for (const bus in buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                allBuses.appendChild(liElement);
            }
        })
        .catch((error) => {
            busName.textContent = 'Error'
        })
}