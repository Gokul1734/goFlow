// components/ReservationForm.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ReservationForm = () => {
  const { carId } = useParams();
  const [name, setName] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  const handleReservation = () => {
    // Implement reservation logic, e.g., send reservation details to a server
    console.log(`Reserved car ${carId} for ${name} on ${pickupDate}`);
  };

  return (
    <div>
      <h2>Reserve a Car</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Pickup Date:</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
        <button type="button" onClick={handleReservation}>
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
