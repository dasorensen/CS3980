// Api endpoint for the population data
const api = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

// Display the population data in a table
const displayPopulation = (populations) => {
    const tbody = document.getElementById('population-rows');
    tbody.innerHTML = ''
    const rows = populations.map(x => {
        return `<tr>
            <td>${x.Year}</td>
            <td>${x.Population}</td>
            </tr>`
    });
    tbody.innerHTML = rows.join(' ');
}

const getPopulations = () => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // use JSON.parse to obtain the information from API
            data = JSON.parse(xhr.responseText);

            // obtain only the "data" portion of the returned object from JSON.parse
            popData = data["data"]
            console.log(popData);

            // call the displayPopulation function to tabulate the population data
            displayPopulation(popData);
        }
    }

    xhr.open('GET', api, true);
    xhr.send();
};

// IIFE function to parse the population data from the API endpoint upon loading the webpage
(() => {
    getPopulations();
})()