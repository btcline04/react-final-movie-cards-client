import { resetMovieForm } from './movieForm';

const API_URL = process.env.REACT_APP_API_URL;


// * Action Creators - sent to reducers * // 
const setMovies = movies => {
  return {
    type: 'GET_MOVIES_SUCCESS',
    movies
  }
}

const addMovie = movie => {
  return {
    type: 'CREATE_MOVIE_SUCCESS',
    movie
  }
}

// * Asynchronous Actions * //
export const getMovies = () => {
  return dispatch => {
    fetch(`${API_URL}/movies`)
      .then(resp => resp.json())
      .then(movies => dispatch(setMovies(movies)))
      .catch(error => console.log(error))
  }
}

export const createMovie = movie => {
  return dispatch => {
    return fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({movie: movie })
    })
      .then(resp => resp.json())
      .then(movie => {
        dispatch(addMovie(movie))
        dispatch(resetMovieForm())
      });
  }
}