// ** Action Creators ** //
export const updateMovieFormData = movieFormData => {
  return {
    type: 'UPDATE_DATA',
    movieFormData
  }
}

export const resetMovieForm = () => {
  return {
    type: 'RESET_MOVIE_FORM'
  }
}