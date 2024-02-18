from flask import Flask, jsonify
from faker import Faker
import random
import time
from flask_cors import CORS

fake = Faker()

app = Flask(__name__)



app = Flask(__name__)
CORS(app) 

@app.route('/connected-car-data', methods=['GET'])
def connected_car_data():
    num_samples = 5  # Adjust the number of data points as needed
    car_data_stream = simulate_connected_car_data(num_samples)
    return jsonify(car_data_stream)

def simulate_connected_car_data(num_samples):
    # Simulate a stream of connected car data
    car_data_stream = []
    for _ in range(num_samples):
        car_data = {
            "vin": str(fake.uuid4()),
            "vehicle_speed": random.uniform(0, 120),  # in km/h
            "fuel_level": random.uniform(0, 100),  # in percentage
            "latitude": fake.latitude(),
            "longitude": fake.longitude(),
            "tyre_pressure": random.uniform(25, 35),  # in PSI
            "climate": {
                "temperature": random.uniform(15, 30),  # in Celsius
                "humidity": random.uniform(20, 80),  # in percentage
            },
            "offroad_efficiency": random.uniform(1, 10),  # in percentage
            "timestamp": fake.date_time_this_decade(),
        }
        car_data_stream.append(car_data)
        time.sleep(1)  # Simulating data being generated every second

    return car_data_stream

if __name__ == '__main__':
    app.run(debug=True)