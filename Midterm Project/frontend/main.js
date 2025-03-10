const api = 'http://127.0.0.1:8000/workouts';







const displayWorkouts = (workouts) => {
    const tbody = document.getElementById('workout-rows');
    tbody.innerHTML = '';
    const rows = workouts.map((x) => {
        return `<tr>
            <td>${x.exercise}</td>
            <td>${x.sets}</td>
            <td>${x.reps}</td>
            <td>${x.notes}</td>
            <td>
            <button type="button" class="btn btn-primary">Edit</button>
            </td>
            <td>
            <button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>`
    });
    tbody.innerHTML = rows.join(' ');
};

const getWorkouts = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
            console.log(data);
            displayWorkouts(data);
        }
    };

    xhr.open('GET', api, true);
    xhr.send();
};

(() => {
    getWorkouts();
})();