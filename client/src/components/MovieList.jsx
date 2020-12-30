import React from "react";
import MovieEntry from "./MovieEntry.jsx";

const MovieList = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <MovieEntry movie={movie} key={movie.id} />
    ))}
  </ul>
);

export default MovieList;
