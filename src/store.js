import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import movies from './reducers/movies';
import movieFormData from './reducers/movieFormData';

const reducers = combineReducers({
  movies,
  movieFormData
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middleware = [thunk];

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)),
);