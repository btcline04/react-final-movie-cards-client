export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIES_SUCCESS':
      return action.movies;

    case 'CREATE_MOVIE_SUCCESS':
      return state.concat(action.movie);

    default:
    return state;
  }
};
