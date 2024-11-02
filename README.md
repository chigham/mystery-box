Include directions to create the python environment, which should include terminal commands involving requirements.txt or environment.yml.

Download python installer here: `https://www.python.org/downloads/`
Alternatively, download python miniforge installer: `https://conda-forge.org/miniforge/`
Then install python using python installer or miniforge installer.

Configure vs code to work with python. Then open `mystery-box` folder and open `app.py`.

Make sure your python environment has flask
```shell
pip install flask
```
or if that doesn't work, try this:
```shell
python -m pip install flask
```

Run `app.py`, then access local server in browser: `http://127.0.0.1:5000/`

Ensure styling is working. Confirm some text is red and blue.

Confirm JavaScript is working by clicking the button to toggle the title color.

Confirm Flask paths are working by clicking "hello world" which includes an embedded link to another page rendered by dask.

Next steps: configure python anywhere web app to look at github repository code.
