import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/movies`)
      .then(resp => resp.json())
      .then(movies => this.setState({ movies }))
  }

  render() {
    return (
      <div className="App">
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
