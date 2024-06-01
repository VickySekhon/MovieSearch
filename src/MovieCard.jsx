import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div className="mt-12 flex justify-center items-center flex-wrap">
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
          ></img>
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
