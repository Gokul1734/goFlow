// components/CarListing.js
// import car from "../images/";
import React from "react";
// import { Link } from "react-router-dom";
import c1 from "../images/Car-1.jpg";
import c2 from "../images/Car-2.jpg";
import c3 from "../images/Car-3.jpg";
import c4 from "../images/Car-4.jpg";
import c5 from "../images/Car-5.jpg";
// import { Router, Switch, Route } from "react-router-dom";
// const c = [c1, c2, c3, c4, c5];
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CarListing = () => {
  // Dummy car data for illustration
  // console.log(c1);
  const cars = [
    { id: 1, make: "Toyota", model: "Camry", year: 2022, price: 50, pic: c1 },
    { id: 2, make: "Honda", model: "City", year: 2023, price: 100, pic: c2 },
    { id: 3, make: "BMW", model: "GTR", year: 2023, price: 350, pic: c3 },
    { id: 4, make: "Benz", model: "S-class", year: 2022, price: 300, pic: c4 },
    {
      id: 5,
      make: "RollsRoyce",
      model: "Ghost",
      year: 2024,
      price: 450,
      pic: c5,
    },

    // Add more cars
  ];

  return (
    <div className="bg-gray-700 p-10 overflow-hidden">
      <h2 className="text-white">Available Cars for Rent</h2>
      <ul>
        <div className="flex w-screen h-full overflow-scroll ">
          {cars.map((car) => (
            <div className="w-70 p-3">
              <img className="w-80 h-80" src={car.pic} alt="" />
              <li className="text-white p-3 gap-2" key={car.id}>
                <button>
                  {car.year} {car.make} {car.model} - ${car.price}/day
                </button>
              </li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

// async function fetchConnectedCarData() {
//   try {
//     const response = await fetch("http://127.0.0.1:5000/connected-car-data");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching connected car data:", error);
//   }
// }

export default CarListing;

{
  /* <Router>
                  <Link to={`/car`}>
                    {car.year} {car.make} {car.model} - ${car.price}/day
                  </Link>
                  <Route exact path="/car" element={<car_data />}></Route>
                </Router> */
}
