const api = 'http://127.0.0.1:8000/workouts';

document.getElementById('save-new-workout').addEventListener('click', (e) => {
    e.preventDefault();
    postWorkout();
    const closeBtn = document.getElementById('add-close');
    closeBtn.click();
});

const postWorkout = () => {
    const exerciseInput = document.getElementById('new-exercise');
    const exercise = exerciseInput.value;
    const setsInput = document.getElementById('new-sets');
    const sets = setsInput.value;
    const repsInput = document.getElementById('new-reps');
    const reps = repsInput.value;
    const notesInput = document.getElementById('new-notes');
    const notes = notesInput.value;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            getWorkouts();
        }
    };

    xhr.open('POST', api, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({exercise, sets, reps, notes}));
};



const deleteWorkout = (exercise) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = data.filter((x) => x.exercise != exercise);
            getWorkouts();
        }
    };

    xhr.open('DELETE', `${api}/${exercise}`, true);
    xhr.send();
};

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
            <button onClick="deleteWorkout('${x.exercise}')" type="button" class="btn btn-danger">Delete</button>
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