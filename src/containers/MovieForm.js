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
    .then(this.props.resetMovieForm)
  }


  render() {
    const { title, plot_summary, img_url, run_time } = this.props.movieFormData;
    return (

      <div class="valign-wrapper row login-box">
        <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
          <form>
            <div class="card-content">
              <span class="card-title">Add A Movie</span>
                <div class="row">

                  <div class="input-field col s12">
                    <label htmlFor="title" className="active">Title:</label>
                    <input type="text" name="title" value={title} onChange = {this.handleOnChange} />
                  </div>

                  <div class="input-field col s12">
                    <label htmlFor="plot_summary" className="active">Plot Summary:</label>
                    <input type="text" name="plot_summary" value={plot_summary} onChange = {this.handleOnChange} />
                  </div>

                  <div class="input-field col s12">
                    <label htmlFor="img_url" className="active">Poster URL:</label>
                    <input type="text" name="img_url" value={img_url} onChange = {this.handleOnChange} />
                  </div>

                  <div class="input-field col s12">
                    <label htmlFor="run_time" className="active">Run Time:</label>
                    <input type="number" name="run_time" value={run_time} onChange = {this.handleOnChange}  />
                  </div>

                </div>
            </div>

            <div class="card-action center-align">
              <button type="submit" className="btn waves-effect waves-light" >Add Movie <i class="material-icons right">send</i> </button>
            </div>

          </form>
        </div>
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



