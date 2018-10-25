import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovieFormData } from '../actions/movieForm';
import { createMovie } from '../actions/movies';

class MovieForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentMovieFormData = Object.assign({}, this.props.movieFormData, {
      [name]: value
    })
    this.props.updateMovieFormData(currentMovieFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMovie(this.props.movieFormData)
  }


  render() {
    const { title, plot_summary, img_url, run_time } = this.props.movieFormData;
    return (
      <div>
        <h2>Add A Movie:</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={title} onChange = {this.handleOnChange} />
          </div>

          <div>
            <label htmlFor="plot_summary">Plot Summary:</label>
            <input type="text" name="plot_summary" value={plot_summary} onChange = {this.handleOnChange} />
          </div>

          <div>
            <label htmlFor="img_url">Poster URL:</label>
            <input type="text" name="img_url" value={img_url} onChange = {this.handleOnChange} />
          </div>

          <div>
            <label htmlFor="run_time">Run Time:</label>
            <input type="number" name="run_time" value={run_time} onChange = {this.handleOnChange}  />
          </div>

          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieFormData: state.movieFormData
  }
}

export default connect(mapStateToProps, { updateMovieFormData, createMovie })(MovieForm);



