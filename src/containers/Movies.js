import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movies';

class Movies extends Component {

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    movies: state.movies
  })
}

export default connect(mapStateToProps, { getMovies })(Movies);