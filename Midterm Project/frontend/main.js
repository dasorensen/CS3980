const api = 'http://127.0.0.1:8000/workouts';
let selectedWorkout = {};
let exerciseInput = document.getElementById('new-exercise');
let setsInput = document.getElementById('new-sets');
let repsInput = document.getElementById('new-reps');
let notesInput = document.getElementById('new-notes');
let exerciseEditInput = document.getElementById('exercise-edit');
let setsEditInput = document.getElementById('edit-sets');
let repsEditInput = document.getElementById('edit-reps');
let notesEditInput = document.getElementById('edit-notes');

document.getElementById('save-new-workout').addEventListener('click', (e) => {
    e.preventDefault();
    postWorkout();
    const closeBtn = document.getElementById('add-close');
    closeBtn.click();
});

const tryEditWorkout = (exercise) => {
    const workout = data.find((x) => x.exercise === exercise);
    selectedWorkout = workout;
    const workoutExercise = document.getElementById('workout-exercise');
    workoutExercise.innerText = workout.exercise;
    exerciseEditInput.value = workout.exercise;
    setsEditInput.value = workout.sets;
    repsEditInput.value = workout.reps;
    notesEditInput.value = workout.notes;
    document.getElementById('msg').innerHTML = '';
};

document.getElementById('form-edit').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!exerciseEditInput.value) {
        msg.innerHTML = 'Exercise cannot be blank';
    }
    else {
        editWorkout(exerciseEditInput.value, setsEditInput.value, repsEditInput.value, notesEditInput.value);
    }
});

const editWorkout = (exercise, sets, reps, notes) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            selectedWorkout.exercise = exercise;
            selectedWorkout.sets = sets;
            selectedWorkout.reps = reps;
            selectedWorkout.notes = notes;
            displayWorkouts(data);

            const closeBtn = document.getElementById('edit-close');
            closeBtn.click();
        }
    };

    xhr.open('PUT', `${api}/${selectedWorkout.exercise}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({exercise, sets, reps, notes}));
};

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
            <button onClick="tryEditWorkout('${x.exercise}')" type="button" data-bs-toggle="modal" data-bs-target="#modal-edit" class="btn btn-info">Edit</button>
            <td>
            <td>
            <button onClick="deleteWorkout('${x.exercise}')" type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>`
    });
    tbody.innerHTML = rows.join(' ');

    resetForm();
};

const resetForm = () => {
    exerciseInput.value = '';
    setsInput.value = '';
    repsInput.value = '';
    notesInput.value = '';
}

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