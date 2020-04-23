import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux';


const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
ReactDOM.render(
  <Provider stroe={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
