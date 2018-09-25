import React from 'react';
import MovieCard from '../components/MovieCard';

const Movies = (props) => {
  return (
    <div>
      <h1>Movies</h1>
      {props.movies.map(movie => <MovieCard movie={movie} />)}
    </div>
  )
}

export default Movies;