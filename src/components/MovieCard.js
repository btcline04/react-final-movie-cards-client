import React from 'react';

const MovieCard = ({movie}) => {
  return (

  <div className="container row">
    <div className="s6 m6 col">
      <div className="card large">
        <div className="card-image">
          <img className="" src={movie.img_url} alt={movie.title} />
          <span className="card-title">{movie.title}</span>
        </div>
        <div className="card-content">
          <p>{movie.plot_summary}</p>
          <p>Run time: {movie.run_time} minutes</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieCard;