# Mystery Box App

## Setup and Develop Locally

### Install Python

Include directions to create the python environment, which should include terminal commands involving requirements.txt or environment.yml.

Download python installer here: `https://www.python.org/downloads/`
Alternatively, download python miniforge installer: `https://conda-forge.org/miniforge/`
Then install python using python installer or miniforge installer.

### Configure vs code to work with python. 

Install plugins if necessary. 

Select the python interpreter. Ctrl + Shift + P, then type "select python interpreter", and select that option. Choose from the dropdown.

Make sure your python environment has flask
```shell
pip install flask
```
or if that doesn't work, try this:
```shell
python -m pip install flask
```

### Ready to test and develop code

In VS Code open the `mystery-box` folder and open `app.py`.

Run `app.py` with one of the following commands: 
```shell
flask --app app run
```
```shell
python app.py
```

then access local server in browser: `http://127.0.0.1:5000/`

### Ensure code is working (update as necessary)

Ensure styling is working. Confirm some text is red and blue.

Confirm JavaScript is working by clicking the button to toggle the title color.

Confirm Flask paths are working by clicking "hello world" which includes an embedded link to another page rendered by dask.

## Deployment

### Connecting GitHub to PythonAnywhere Web App

Next steps: configure python anywhere web app to look at github repository code.

Here are some [directions](https://www.youtube.com/watch?v=4sTZN15J33A) for how to link up your app to the GitHub.

## External Links

GitHub Repository: [Chigham Mystery-Box](https://github.com/chigham/mystery-box)

Python Anywhere: [General Website](https://www.pythonanywhere.com/)

Python Anywhere code: [Chigham App]()

Python Anywhere code: [Dwoodward App ?]()

Public Website: [chigham.pythonanywhere.com](https://chigham.pythonanywhere.com)
