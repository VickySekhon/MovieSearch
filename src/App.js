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
    <div className="p-16 flex justify-center items-center flex-col">
      <Title />
      <Searchbar onSearch={handleSearch}/>
      {movies?.length > 0 ? (
        <div className="mt-12 flex justify-center items-center flex-wrap">
          {movies.map((movie) =>
            <MovieCard movie={movie} />
          )}
        </div>
      ) : (
        <div className="w-full mt-12 text-red-500 flex justify-center items-center">No Movies Found...</div>
      )}
    </div>
  );
};

export default App;