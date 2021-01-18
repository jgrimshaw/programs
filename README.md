# Programs app
Built with Python/Flask and React: allows users to list programs by priority and status, add and delete them.
![screenshot](https://github.com/jgrimshaw/programs/blob/master/docs/programs-app.png?raw=true)

## Getting started
Clone the project locally. 

#### Start the React frontend:
* cd into programs directory, run `npm install`
* run `npm start`
* runs on localhost:3000

#### Start the Python backend: 
* cd into api directory
* set up your virtual environment: https://docs.python.org/3/library/venv.html
* activate virtual environment  
macOS and Linux: `source env/bin/activate`  
Windows `.\env\Scripts\activate`
* install pipenv `pip install pipenv`
* install dependencies `pipenv install`
* run `export FLASK_APP=api.py`
* start the server `flask run`
* runs on localhost: 5000

React 17.0.1\
Python 3.7.0\
Flask 1.1.2