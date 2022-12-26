import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import {  logger } from './middlewares';
import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
applyMiddleware(logger)
);

const store = createStore(pokemonsReducer, composedEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);
