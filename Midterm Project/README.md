# Midterm Project - Workout Planner App
## Part 1: Basic Application Features

The objective of the Midterm Project was to create an app similar to the ToDo app demonstrated in class using FastAPI framework and HTML/Javascript/CSS. The app should be simple
but should also showcase an understanding of the basic CRUD operatons. The app that I chose to create was a workout planner app. 


The files that I used to create the backend operations can all be found in the backend folder [here](https://github.com/dasorensen/CS3980/tree/main/Midterm%20Project/backend). They include models and application routers for workouts and users, database connections, and password authentication processes. 

The frontend files are all found in the frontend folder [here](https://github.com/dasorensen/CS3980/tree/main/Midterm%20Project/frontend) and include the [index.html](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/frontend/index.html) file, the javascript file ([main.js](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/frontend/main.js)), and the [style.css](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/frontend/style.css) file. 



<br>

Upon launching the web application, the following screen will appear:
![Page Upon Launch](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/Upon%20Open.png)

<br>

To start planning your workout, select the "Add New Exercise" button and the following window will appear:
![New Exercise](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/New%20Exercise.png)

<br>

After entering your workout information and pressing the "save" button, your exercise will appear as part of a list on the main application page. You may continue to add exercises to the list as you desire. An example workout routine is shown here:
![Example Routine](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/Example%20Routine.png)

<br>

From here, you may edit or delete any exercises that you wish using the "Edit" and "Delete" buttons. Pressing the "Delete" button will cause the exercise to be removed from your workout list. Pressing the "Edit" button will cause the following window to appear, allowing you to edit any details of the exercise: 
![Edit Workout](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/Edit%20Workout.png)

<br><br>
## Part 2: User Signup and Sign-in 

Part 2 of the project involved implementing user signup and signin features. This was done using jwt web authentication in addition to a collection of users stored in the database. Two new buttons have been added to the interface as shown below:
![Updated Interface](https://github.com/user-attachments/assets/d019b206-825b-4a6f-a741-d5d1b44f9e56)

<br>

Selecting the "Sign-up" button will cause a pop-up window to appear that allows a user to enter their information in order to signup. The user can then create a username and password to associate with their email and select the "Sign-up" button again to send the information to the database. The signup window is shown here:
![Signup](https://github.com/user-attachments/assets/9d51a73f-6ea3-400d-95ed-280d7ac6a79f)

<br>

Following a successful signup, a message is displayed to the screen stating that the user has been created. The user information is also saved to the users collection in the database. This is shown in the image below. Notice that the password saved in the database has been hashed and salted to prevent any security breaches. 
![User Database](https://github.com/user-attachments/assets/0bfaef1e-8db5-43d0-849c-7910f3947d98)

<br>

Finally, a user can sign-in if they already have an account saved in the database. To do so, they press the "Sign-in" button and are given another pop-up window to enter their user credentials. This window is shown in the image below. To successfully sign-in, the user must enter the same username and password that they entered when they signed up. Following a successful sign-in, a message will be displayed stating that the user has been signed in. 
![Sign-in](https://github.com/user-attachments/assets/67c89ea3-beb4-466e-aabd-423adb3b221d)


<br><br><br>

## Launch Application
Before launching the web application, please refer to the requirements.txt file [(here)](https://github.com/dasorensen/CS3980/blob/main/Midterm%20Project/backend/requirements.txt) to ensure that all packages are installed on your system. After this has been completed, you can follow the next instructions to launch the application:

1. Open the [backend](https://github.com/dasorensen/CS3980/tree/main/Midterm%20Project/backend) folder in a python editor

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
