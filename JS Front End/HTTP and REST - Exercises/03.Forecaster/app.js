function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    const TODAY_URL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const UPCOMING_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const location = document.getElementById('location');
    const getWeatherButton = document.getElementById('submit');
    const currentCondition = document.getElementById('current');
    const upcomingCondition = document.getElementById('upcoming');
    const forecastDiv = document.getElementById('forecast');

    getWeatherButton.addEventListener('click', showWeather);

    const weatherIcons = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        degrees: '&#176',
    }

    async function showWeather() {
        const allCities = await (await fetch(BASE_URL)).json();
        let currentCity;
        try {
            if (!location.value) {
                throw new Error('Моля въведете град');
            }
            const {code, name} = allCities.find(city => city.name === location.value);
            currentCity = {code, name}
        } catch (e) {
            location.placeholder = e.message;
        }

        try {
            const dataToday = await (await fetch(`${TODAY_URL}${currentCity.code}`)).json();
            const dataUpcoming = await (await fetch(`${UPCOMING_URL}${currentCity.code}`)).json();
            forecastDiv.style.display = 'block';

            setTodayCondition(dataToday);
            setUpcomingCondition(dataUpcoming);
        } catch (e) {
            console.log(e.message)
        }


    }

    function setTodayCondition(data) {
        const {name, forecast} = data;
        const {condition, high, low} = forecast;
        const lowAndHighTempText = `${low}${weatherIcons.degrees}/${high}${weatherIcons.degrees}`

        const currentForecastDiv = document.createElement('div')
        currentForecastDiv.className = 'forecasts';

        const conditionSymbolElement = createSpanElement('condition symbol', '', weatherIcons[condition]);
        const conditionsGroupElement = createSpanElement('condition');
        const forecastNameDataElement = createSpanElement('forecast-data', name);
        const forecastTempDataElement = createSpanElement('forecast-data', '', lowAndHighTempText);
        const forecastKindWeatherDataElement = createSpanElement('forecast-data', condition);

        conditionsGroupElement.appendChild(forecastNameDataElement);
        conditionsGroupElement.appendChild(forecastTempDataElement);
        conditionsGroupElement.appendChild(forecastKindWeatherDataElement);
        currentForecastDiv.appendChild(conditionSymbolElement);
        currentForecastDiv.appendChild(conditionsGroupElement);
        currentCondition.appendChild(currentForecastDiv);
    }

    function setUpcomingCondition(data) {

        const forecastInfoDivElement = document.createElement('div');
        forecastInfoDivElement.className = 'forecast-info';

        for (const obj of data.forecast) {
            const {condition, high, low} = obj;
            const lowAndHighTempText = `${low}${weatherIcons.degrees}/${high}${weatherIcons.degrees}`

            const upcomingSpanGroup = createSpanElement('upcoming');
            const symbolElement = createSpanElement('symbol', '', weatherIcons[condition]);
            const forecastTempDataElement = createSpanElement('forecast-data', '', lowAndHighTempText);
            const forecastKindWeatherDataElement = createSpanElement('forecast-data', condition)

            upcomingSpanGroup.appendChild(symbolElement);
            upcomingSpanGroup.appendChild(forecastTempDataElement);
            upcomingSpanGroup.appendChild(forecastKindWeatherDataElement);


            forecastInfoDivElement.appendChild(upcomingSpanGroup)
        }

        upcomingCondition.appendChild(forecastInfoDivElement);
    }

    function createSpanElement(className, text, symbolText) {
        const spanElement = document.createElement('span');
        spanElement.className = className;

        if (text) {
            spanElement.textContent = text;
        }

        if (symbolText) {
            spanElement.innerHTML = symbolText;
        }

        return spanElement;
    }
}

attachEvents();