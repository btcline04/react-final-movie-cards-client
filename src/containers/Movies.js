import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import MovieForm from './MovieForm';

class Movies extends Component {
  render() {
    return (
      <div>
        <h1>Movies</h1>
        {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        <MovieForm />
      </div>
    )
  }
}

export default Movies;