import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import MovieForm from './MovieForm';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
render() {
    return (
      <Router>
        <div className="fonts">
          <NavBar />
          <Route exact path="/" component={Movies} />
          <Route exact path="/new" component={MovieForm} />
        </div>
      </Router>
    );
  }
}

export default App;
