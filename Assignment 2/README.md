# Assignment 2

The objective of this assigment was to create a webpage that displays US Population data from an API endpoint obtained from [Data USA](https://datausa.io/about/api/). To achieve 
this I used FastAPI/Uvicorn to set up a web server, HTML to format the web page, and JavaScript to retrieve and format the population data from the API endpoint. 

[main.py](https://github.com/dasorensen/CS3980/blob/main/Assignment%202/main.py) creates the instance of FastAPI (app) and mounts the HTML file to the app. 

[index.html](https://github.com/dasorensen/CS3980/blob/main/Assignment%202/frontend/index.html) contains all the formatting information for the webpage, specifically the header and 
table format. 

[main.js](https://github.com/dasorensen/CS3980/blob/main/Assignment%202/frontend/main.js) is the JavaScript file that obtains the US Population data from the API endpoint and 
organizes it to be tabulated on the webpage. This file contains an IIFE function that is used to parse the data from [Data USA](https://datausa.io/about/api/) and only keeps what is 
relevant. A separate displayPopulation function is then called to format the information into a readable table on the webpage. 

A screenshot of the resulting webpage is shown here: 
![Population Webpage](https://github.com/dasorensen/CS3980/blob/main/Assignment%202/Population%20Webpage.png)

Instructions to run the code:

1. Open the [Assignment 2](https://github.com/dasorensen/CS3980/tree/main/Assignment%202) folder in a python editor

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
