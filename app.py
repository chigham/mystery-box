from flask import Flask, render_template, jsonify

import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route("/api/data")
def get_data():
    url = "https://health.aws.amazon.com/public/currentevents"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)