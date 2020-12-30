import React from "react";

const MovieEntry = ({ movie }) => (
  <li>
    <span>Name: { movie.name } <br/> </span>
    <span>length: { movie.length }<br/> </span>
    <span> rating:{ movie.rating }<br/><br/></span>
  </li>
);

export default MovieEntry;
