const initialState = {
  title: '',
  plot_summary: '',
  img_url: '',
  run_time: 0
};

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATE_DATA':
      return action.movieFormData

    case 'RESET_MOVIE_FORM':
    return initialState;

    default:
      return state;
  }
}