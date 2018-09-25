import React from 'react';

const Movies = (props) => {
  return (
    <div>
      <h1>Movies</h1>
      {props.movies.map(movie => 
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.plot_summary}</p>
        <img src={movie.img_url} alt={movie.title}/>
        <p>Run time: {movie.run_time} minutes</p>
      </div>
      )}
    </div>
  )
}

export default Movies;