import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CityDetails from "./CityDetails";

function CitiesLayout({ cities }) {
  return (
    <div className="cities-layout">
      <h2>Cities List</h2>

      {/* List of cities as clickable links */}
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {/* Each link points to its specific city details */}
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>

      {/* Nested route for city details */}
      <Routes>
        {/* When /cities/:cityId is accessed, CityDetails will render */}
        <Route path=":cityId" element={<CityDetails cities={cities} />} />
      </Routes>

      {/* Alternative for nested routes */}
      <Outlet />
    </div>
  );
}

export default CitiesLayout;
