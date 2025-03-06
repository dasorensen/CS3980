const api = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

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
            data = JSON.parse(xhr.responseText);
            popData = data["data"]
            console.log(popData);
            displayPopulation(popData);
        }
    }

    xhr.open('GET', api, true);
    xhr.send();
};

(() => {
    getPopulations();
})()