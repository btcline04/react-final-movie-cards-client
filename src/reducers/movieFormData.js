export default (state = {
  title: '',
  plot_summary: '',
  img_url: '',
  run_time: 0
}, action) => {

  switch(action.type) {
    case 'UPDATE_DATA':
      return action.movieFormData

    default:
      return state;
  }
}