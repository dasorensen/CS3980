# Midterm Project - Workout Planner App

The objective of the Midterm Project was to create an app similar to the ToDo app demonstrated in class using FastAPI framework and HTML/Javascript/CSS. The app should be simple
but should also showcase an understanding of the basic CRUD operatons. The app that I chose to create was a workout planner app. 

The backend files that were used include [main.py](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/main.py), [workout.py](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/workout.py), and [workout_routes.py](http://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/workout_routes.py). Please view these files by clicking on their links or by visiting the Midterm Project folder
[here](https://github.com/dasorensen/CS3980/tree/main/Midterm%20Project).

The frontend files are all found in the frontend folder [here](https://github.com/dasorensen/CS3980/tree/main/Midterm%20Project/frontend) and include the [index.html](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/frontend/index.html) file, the javascript file ([main.js](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/frontend/main.js)), and the [style.css](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/frontend/style.css) file. 

<br><br><br>

To launch the web application: 

1. Open the [Midterm Project](https://github.com/dasorensen/CS3980/tree/main/Midterm%20Project) folder in a python editor

2. Create a virtual environment using the following terminal commands:
   
             python -m venv venv

             Windows:
             .\venv\Scripts\activate

             macOS:
             source venv\bin\activate

3. Install uvicorn using the following terminal command:

             pip install fastapi uvicorn

4. Launch the webpage using the following terminal command (open the generated link):
   
             uvicorn main:app --reload

<br><br>
Upon launching the web application, the following screen will appear:


To start planning your workout, select the "Add New Exercise" button and the following window will appear:


After entering your workout information and pressing the "save" button, your exercise will appear as part of a list on the main application page. You may continue to add exercises to the list as you desire. An example workout routine is shown here:


From here, you may edit or delete any exercises that you wish using the "Edit" and "Delete" buttons. Pressing the "Delete" button will cause the exercise to be removed from your workout list. Pressing the "Edit" button will cause the following window to appear, allowing you to edit any details of the exercise: 
