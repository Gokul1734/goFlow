// CarDataComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const[us]

const CarDataComponent = () => {
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    // Make API request to High Mobility here
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sandbox.rest-api.high-mobility.com/v5",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer c3c74102-59dd-46e7-9813-b1abc2fa3354",
            },
          }
        );

        setCarData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Dependency array to run effect only once

  return (
    <div>
      {carData ? (
        // Render the fetched data
        <pre>{JSON.stringify(carData, null, 2)}</pre>
      ) : (
        // Display a loading message or spinner
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarDataComponent;
