from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    area = data['area']
    prediction = model.predict([[area]])
    return jsonify({'prediction': round(prediction[0], 2)})

if __name__ == '__main__':
    app.run(debug=True)
