import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  liked: localStorage.getItem("liked")
    ? JSON.parse(localStorage.getItem("liked"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(state.liked));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToLiked = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIKED", payload: movie });
  };

  const removeMovieFromLiked = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_LIKED", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToLiked = (movie) => {
    dispatch({ type: "MOVE_TO_LIKED", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        liked: state.liked,
        watched: state.watched,
        addMovieToLiked,
        removeMovieFromLiked,
        addMovieToWatched,
        moveToLiked,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
