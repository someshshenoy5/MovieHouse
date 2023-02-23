import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Liked = () => {
  const { liked } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Liked</h1>

          <span className="count-pill">
            {liked.length} {liked.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {liked.length > 0 ? (
          <div className="movie-grid">
            {liked.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="liked" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
