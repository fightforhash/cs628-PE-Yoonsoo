import React from "react";
import { useParams } from "react-router-dom";

const CityDetails = ({ cities }) => {
  // Extract cityId from the URL
  const { cityId } = useParams();

  // Find the corresponding city using the cityId
  const city = cities.find((c) => c.id === cityId);

  // If no city is found, display a message
  if (!city) {
    return <h3>City not found</h3>;
  }

  return (
    <div className="city-details">
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityDetails;
