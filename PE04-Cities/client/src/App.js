import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import CitiesLayout from "./components/CitiesLayout"; // Displays list of cities & details
import AddCity from "./components/AddCity";           // Form to add new cities
import CityDetails from "./components/CityDetails";   // City-specific details
import "./App.css";                                   // Import main styling

function App() {
  // Initialize state to hold the list of cities
  const [cities, setCities] = useState([
    { id: "1", name: "Seattle", country: "USA", population: "733,919" },
    { id: "2", name: "Paris", country: "France", population: "2,048,472" },
  ]);

  return (
    <Router>
      {/* Header with app title and navigation links */}
      <header className="header">
        <h1>Cities Application</h1>
        <nav>
          <Link to="/cities">Cities List</Link> {/* Link to cities list */}
          <Link to="/add">Add City</Link>       {/* Link to add city form */}
        </nav>
      </header>

      {/* Main container for the routed components */}
      <div className="wrapper">
        <div className="content">
          <Routes>
            {/* Redirect root path "/" to "/cities" */}
            <Route path="/" element={<Navigate to="/cities" />} />

            {/* Cities List with nested city details */}
            <Route path="/cities/*" element={<CitiesLayout cities={cities} />} />

            {/* Add City form */}
            <Route path="/add" element={<AddCity cities={cities} setCities={setCities} />} />

            {/* Direct city details route (optional redundancy) */}
            <Route path="/:cityId" element={<CityDetails cities={cities} />} />

            {/* Fallback route to handle invalid URLs */}
            <Route path="*" element={<Navigate to="/cities" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
