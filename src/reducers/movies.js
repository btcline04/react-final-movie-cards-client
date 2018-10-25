export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIES_SUCCESS':
      return action.movies;

    default:
    return state;
  }
};
