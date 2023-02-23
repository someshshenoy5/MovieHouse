export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKED":
      return {
        ...state,
        liked: [action.payload, ...state.liked],
      };
    case "REMOVE_MOVIE_FROM_LIKED":
      return {
        ...state,
        liked: state.liked.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        liked: state.liked.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_LIKED":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        liked: [action.payload, ...state.liked],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
