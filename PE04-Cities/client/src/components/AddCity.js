import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ cities, setCities }) {
  // Local states to manage form inputs
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  // Hook to programmatically navigate routes
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    // Create a new city object with unique ID
    const id = String(Date.now()); // Using timestamp as unique ID
    const newCity = { id, name, country, population };

    // Add new city to existing cities list
    setCities([...cities, newCity]);

    // Redirect back to cities list after adding
    navigate("/cities");
  };

  return (
    <div className="add-city">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on change
            style={{ marginLeft: "1rem" }}
          />
        </div>

        {/* Country input field */}
        <div>
          <label>Country:</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)} // Update state on change
            style={{ marginLeft: "1rem" }}
          />
        </div>

        {/* Population input field */}
        <div>
          <label>Population:</label>
          <input
            type="text"
            required
            value={population}
            onChange={(e) => setPopulation(e.target.value)} // Update state on change
            style={{ marginLeft: "1rem" }}
          />
        </div>

        {/* Submit button */}
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Add City
        </button>
      </form>
    </div>
  );
}

export default AddCity;
