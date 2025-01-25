import React, { useState } from "react";
import "./style.css";

function App() {
  // Movie data
  const [movies] = useState([
    { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  ]);

  // State for selected genre
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Unique genres for the dropdown
  const genres = ["All Genres", ...new Set(movies.map((m) => m.genre))];

  // Filter movies based on selected genre
  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className={`movie-list-container`}>
      <h1>Movie List</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movies-container">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;