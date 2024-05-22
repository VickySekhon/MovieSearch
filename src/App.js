import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";
import Title from "./Title.jsx";
import Searchbar from "./Searchbar.jsx";

// APIKEY = 8ccf2ead

const API_URL = "https://www.omdbapi.com?apikey=8ccf2ead";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    setMovies(data.Search);
  };


  const handleSearch = (searchTerm) => {
    searchMovies(searchTerm);
  }

  return (
    <div className="app">
      <Title />
      <Searchbar onSearch={handleSearch}/>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) =>
            <MovieCard movie={movie} />
          )}
        </div>
      ) : (
        <div className="empty">No Movies Found...</div>
      )}
    </div>
  );
};

export default App;