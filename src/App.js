import React, { useState } from "react";
import random from "random";
import { Navbar } from "react-bootstrap";
import CarListing from "./components/Carlisting";
import Home from "./components/Home";

const generateConnectedCarData = () => {
  const randomFloat = (min, max) =>
    (Math.random() * (max - min) + min).toFixed(2);

  return {
    vin: "VIN" + Math.floor(Math.random() * 100000),
    vehicle_speed: randomFloat(0, 120),
    fuel_level: randomFloat(0, 100),
    latitude: (Math.random() * (90 - -90) + -90).toFixed(6),
    longitude: (Math.random() * (180 - -180) + -180).toFixed(6),
    tyre_pressure: randomFloat(25, 35),
    climate: {
      temperature: randomFloat(15, 30),
      humidity: randomFloat(20, 80),
    },
    offroad_efficiency: randomFloat(1, 10),
    timestamp: new Date().toISOString(),
  };
};

const App = () => {
  const [carData, setCarData] = useState(generateConnectedCarData());

  const handleGenerateData = () => {
    setCarData(generateConnectedCarData());
  };

  return (
    <div>
      <Navbar className="h-screen bg-black">
        <Home />
        <CarListing />
      </Navbar>
      <h1>Connected Car Data</h1>
      <pre>{JSON.stringify(carData, null, 2)}</pre>
      <button onClick={handleGenerateData}>Generate Data</button>
    </div>
  );
};

export default App;
